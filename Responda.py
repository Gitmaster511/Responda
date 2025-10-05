import os
import json
import time
import serial
import sounddevice as sd
import soundfile as sf
import tempfile
import firebase_admin
from firebase_admin import credentials, firestore
from elevenlabs.client import ElevenLabs
from elevenlabs.play import play
import speech_recognition as sr


SERVICE_ACCOUNT_PATH = "test.json" #this is our firebase config
SERIAL_PORT = "/dev/cu.usbserial-1130" 
SERIAL_BAUD = 9600


cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()
eleven = ElevenLabs(api_key="Nope")
ser = serial.Serial(SERIAL_PORT, SERIAL_BAUD, timeout=1)

r = sr.Recognizer()

print("Listening for falls...")


def upload_to_firestore(doc):
    if "timestamp" not in doc:
        doc["timestamp"] = time.strftime("%Y-%m-%d %H:%M:%S")
    db.collection("fall_alerts").add(doc)
    print("✅ Uploaded:", doc)

def tts(text):
    try:
        audio = eleven.text_to_speech.convert(
            text=text,
            voice_id="Nope",
            model_id="eleven_multilingual_v2"
        )
        play(audio)
    except Exception as e:
        print("TTS error:", e)

def record_audio(duration=5):
    """Record microphone audio and save as temp WAV"""
    print(f"🎙️ Recording for {duration} seconds...")
    fs = 16000
    audio = sd.rec(int(duration * fs), samplerate=fs, channels=1)
    sd.wait()
    tmp = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)
    sf.write(tmp.name, audio, fs)
    print("🎧 Saved audio to", tmp.name)
    return tmp.name

def transcribe_audio(path):
    with sr.AudioFile(path) as source:
        audio = r.record(source)
        try:
            text = r.recognize_google(audio)
            print("Recognized:", text)
            return text.lower()
        except sr.UnknownValueError:
            print("Could not understand audio.")
            return ""
        except sr.RequestError as e:
            print("Speech service error:", e)
            return ""

while True:
    if ser.in_waiting:
        line = ser.readline().decode(errors="ignore").strip()
        if not line:
            continue
        print("Arduino:", line)
        try:
            data = json.loads(line)
        except json.JSONDecodeError:
            continue

        upload_to_firestore(data)
        if data.get("event") == "FALL_DETECTED":
            tts("Do you need help? Please say yes or no.")
            path = record_audio(duration=5)
            response = transcribe_audio(path)

            if "no" in response:
                tts("Okay. I will cancel the alert.")
                upload_to_firestore({"event": "ALERT_CANCELED"})
            elif "yes" in response:
                tts("Alerting paramedics now.")
                upload_to_firestore({"event": "ALERTING_PARAMEDICS"})
            else:
                tts("I didn't understand. Alerting paramedics as a precaution.")
                upload_to_firestore({"event": "NO_RESPONSE"})
