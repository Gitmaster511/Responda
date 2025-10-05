import React, { useEffect, useState, useRef } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../scripts/firebaseConfig"; // adjust path if needed

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const lastAlertTime = useRef<number>(0);

  useEffect(() => {
    const q = query(collection(db, "fall_alerts"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newData: any[] = [];
      snapshot.forEach((doc) => newData.push({ id: doc.id, ...doc.data() }));

      // Trigger alert only if 10 seconds have passed
      if (newData.length > 0) {
        const latestEvent = newData[0];
        const now = Date.now();
        if (now - lastAlertTime.current > 10000) {
          Alert.alert(
            "⚠️ Fall Detected",
            `Event: ${latestEvent.event}\nTime: ${latestEvent.timestamp}`
          );
          lastAlertTime.current = now;
        }
      }

      setNotifications(newData);
    });

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.event}>{item.event || "Unknown Event"}</Text>
      <Text style={styles.detail}>Time: {item.timestamp}</Text>
      <Text style={styles.detail}>Total G: {item.totalG}</Text>
      <Text style={styles.detail}>
        gx: {item.gx}, gy: {item.gy}, gz: {item.gz}
      </Text>
    </View>
  );

  return (
    <LinearGradient
      colors={["#4a90e2", "#6dd5fa"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>📢 Fall Alerts</Text>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={styles.empty}>No fall alerts yet.</Text>}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  event: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#d9534f",
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2,
  },
  empty: {
    textAlign: "center",
    color: "#e0f0ff",
    marginTop: 40,
    fontSize: 16,
  },
});
