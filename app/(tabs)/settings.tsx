import { View, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();

  const [fallAlerts, setFallAlerts] = useState(true);
  const [sosAlerts, setSosAlerts] = useState(true);
  const [medReminders, setMedReminders] = useState(false);
  const [darkMode, setDarkMode] = useState(colorScheme === 'dark');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#EFEFEF', dark: '#222' }}
      headerImage={
        <IconSymbol
          size={250}
          color={darkMode ? '#999' : '#555'}
          name="gearshape.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{ fontFamily: Fonts.rounded }}
        >
          Settings
        </ThemedText>
      </ThemedView>

      {/* Notifications */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Notifications
      </ThemedText>
      <View style={styles.row}>
        <ThemedText>Fall Alerts</ThemedText>
        <Switch value={fallAlerts} onValueChange={setFallAlerts} />
      </View>
      <View style={styles.row}>
        <ThemedText>SOS Alerts</ThemedText>
        <Switch value={sosAlerts} onValueChange={setSosAlerts} />
      </View>
      <View style={styles.row}>
        <ThemedText>Medication Reminders</ThemedText>
        <Switch value={medReminders} onValueChange={setMedReminders} />
      </View>

      {/* Appearance */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Appearance
      </ThemedText>
      <View style={styles.row}>
        <ThemedText>Dark Mode</ThemedText>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Privacy */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Privacy
      </ThemedText>
      <View style={styles.row}>
        <ThemedText>Location Sharing</ThemedText>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <View style={styles.row}>
        <ThemedText>Microphone Access</ThemedText>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      {/* About */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        About
      </ThemedText>
      <ThemedText>Version 1.0.0</ThemedText>
      <ThemedText>© 2025 Your App Team</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -60,
    left: -20,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
