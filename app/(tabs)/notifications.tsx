import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

type Notification = {
  id: string;
  type: string;
  message: string;
  time: string;
};

const mockData: Notification[] = [
  { id: '1', type: 'fall', message: 'Fall detected at 2:43 PM', time: '2:43 PM' },
  { id: '2', type: 'sos', message: 'SOS button pressed!', time: '10:15 AM' },
  { id: '3', type: 'med', message: 'Medication reminder: Take blood pressure pill', time: '8:00 AM' },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(mockData); // ✅ Works now
  }, []);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={[styles.card, item.type === 'sos' && styles.sosCard]}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sosCard: {
    backgroundColor: '#FFEEEE',
    borderColor: '#FF4D4D',
    borderWidth: 1,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: '#888',
    marginTop: 5,
  },
});
