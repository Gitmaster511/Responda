import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function StatusScreen() {
  const deviceLocation = {
    latitude: 40.742054,
    longitude: -74.004531, // Fake NYC coordinates
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header + Status Info */}
      <View style={styles.infoContainer}>
        <ThemedText type="title" style={styles.title}>
          📡 Live Device Status
        </ThemedText>

        <View style={styles.card}>
          <ThemedText style={styles.statusText}>✅ Device Connected</ThemedText>
          <ThemedText style={styles.detailText}>🔋 Battery: 78%</ThemedText>
          <ThemedText style={styles.detailText}>⏱ Last Update: 2:43 PM</ThemedText>
        </View>
      </View>

      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          ...deviceLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={deviceLocation}
          title="Elderly Device"
          description="Last known location"
          pinColor="#4a90e2"
        />
      </MapView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  infoContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 35,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  detailText: {
    fontSize: 15,
    color: "#555",
  },
  map: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 20,
    overflow: "hidden",
  },
});
