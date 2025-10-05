import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function DevicePage() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#4a90e2", "#6dd5fa", "#ffffff"]}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header / Hero */}
        <Animatable.View animation="fadeInDown" duration={1000} style={styles.heroContainer}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/2920/2920258.png" }}
            style={styles.heroImage}
          />
          <Text style={styles.title}>Your Device</Text>
          <Text style={styles.subtitle}>
            Monitor, manage, and stay updated with real-time health insights.
          </Text>
        </Animatable.View>

        {/* Action Buttons */}
        <Animatable.View animation="fadeInUp" delay={300} style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#4a90e2" }]}
            onPress={() => router.push("/(tabs)/status")}
          >
            <MaterialIcons name="sensors" size={32} color="#fff" />
            <Text style={styles.cardText}>View Live Status</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: "#50c878" }]}
            onPress={() => router.push("/(tabs)/reminders")}
          >
            <MaterialIcons name="schedule" size={32} color="#fff" />
            <Text style={styles.cardText}>Set Reminder</Text>
          </TouchableOpacity>
        </Animatable.View>

        {/* Info Section */}
        <Animatable.View animation="fadeInUp" delay={600} style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Device Overview</Text>
          <Text style={styles.infoText}>
            The Responda wearable constantly monitors activity levels and movement patterns. All data is processed securely
            to ensure safety and fast fall detection.
          </Text>
          <Text style={styles.infoText}>
            Use the live status to view sensor data in real time, or set
            reminders to stay consistent with medication and daily check-ins.
          </Text>
        </Animatable.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Connected to Responda Network ⚡</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  heroContainer: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  heroImage: {
    width: 110,
    height: 110,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#eaf4ff",
    textAlign: "center",
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    width: "90%",
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  cardText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },
  infoContainer: {
    marginTop: 25,
    backgroundColor: "#f9fbff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4a90e2",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 8,
    lineHeight: 22,
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 13,
    color: "#777",
  },
});
