import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function StatusPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Live Device Status</ThemedText>

      <View style={styles.card}>
        <ThemedText>✅ Device Connected</ThemedText>
        <ThemedText>Battery: 78%</ThemedText>
        <ThemedText>Last Update: 2:43 PM</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
});
