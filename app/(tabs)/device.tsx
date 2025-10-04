import { View, StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

export default function DevicePage() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>My Device</ThemedText>

      <Button title="View Live Status" onPress={() => router.push('/(tabs)/status')} />

      <View style={{ marginTop: 20 }}>
        <Button title="Set Reminder" onPress={() => router.push('/(tabs)/reminders')} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    textAlign: 'center',
  },
});
