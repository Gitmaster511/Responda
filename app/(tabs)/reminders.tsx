import { useState } from 'react';
import { View, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

type Reminder = {
  id: string;
  text: string;
};

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [input, setInput] = useState('');

  const addReminder = () => {
    if (!input.trim()) return;
    const newReminder: Reminder = {
      id: Date.now().toString(),
      text: input,
    };
    setReminders([...reminders, newReminder]);
    setInput('');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Set Reminders</ThemedText>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter reminder..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={addReminder} />
      </View>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderCard}>
            <ThemedText>{item.text}</ThemedText>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 8,
  },
  reminderCard: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
});
