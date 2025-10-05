#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

unsigned long fallTime = 0;
bool fallDetected = false;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  mpu.initialize();

  if (!mpu.testConnection()) {
    Serial.println("MPU6050 not connected!");
    while (1);
  }
  Serial.println("MPU6050 ready");
}

void loop() {
  int16_t ax, ay, az;
  mpu.getAcceleration(&ax, &ay, &az);

  float gX = ax / 16384.0;
  float gY = ay / 16384.0;
  float gZ = az / 16384.0;
  ///total acceleration x * y * z
  float totalG = sqrt(gX*gX + gY*gY + gZ*gZ);

  if (totalG > 2.5) { 
    fallTime = millis();
    fallDetected = true;
    Serial.print("{\"event\":\"FALL_DETECTED\",");
    Serial.print("\"gx\":"); Serial.print(gX, 2); Serial.print(",");
    Serial.print("\"gy\":"); Serial.print(gY, 2); Serial.print(",");
    Serial.print("\"gz\":"); Serial.print(gZ, 2); Serial.print(",");
    Serial.print("\"totalG\":"); Serial.print(totalG, 2);
    Serial.println("}");
    Serial.println("fall Detected");
    delay(3000);
  }
  }
/*
  if (fallDetected && (millis() - fallTime > 1000)) {
    if (abs(gZ) < 0.5) {
      Serial.print("{\"event\":\"FALL_DETECTED\",");
      Serial.print("\"gx\":"); Serial.print(gX, 2); Serial.print(",");
      Serial.print("\"gy\":"); Serial.print(gY, 2); Serial.print(",");
      Serial.print("\"gz\":"); Serial.print(gZ, 2); Serial.print(",");
      Serial.print("\"totalG\":"); Serial.print(totalG, 2);
      Serial.println("}");
    }
    fallDetected = false;
  }
  */

