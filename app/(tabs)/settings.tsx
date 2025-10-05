import React, { useState } from 'react';
import { View, Switch, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Fonts } from '@/constants/theme';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const [fallAlerts, setFallAlerts] = useState(true);
  const [sosAlerts, setSosAlerts] = useState(true);
  const [medReminders, setMedReminders] = useState(false);
  const [darkMode, setDarkMode] = useState(colorScheme === 'dark');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4a90e2', dark: '#222' }}
      headerImage={
        <IconSymbol
          size={250}
          color={darkMode ? '#999' : '#fff'}
          name="gearshape.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.container}>
        <Animatable.View animation="fadeInDown" duration={1000} style={styles.titleContainer}>
          <ThemedText type="title" style={{ fontFamily: Fonts.rounded, color: darkMode ? '#fff' : '#fff' }}>
            Settings
          </ThemedText>
        </Animatable.View>

        {/* Notifications Section */}
        <Animatable.View animation="fadeInUp" delay={200} style={styles.card}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Notifications</ThemedText>
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
        </Animatable.View>

        {/* Appearance Section */}
        <Animatable.View animation="fadeInUp" delay={400} style={styles.card}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Appearance</ThemedText>
          <View style={styles.row}>
            <ThemedText>Dark Mode</ThemedText>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </Animatable.View>

        {/* Privacy Section */}
        <Animatable.View animation="fadeInUp" delay={600} style={styles.card}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Privacy</ThemedText>
          <View style={styles.row}>
            <ThemedText>Location Sharing</ThemedText>
            <Switch value={true} onValueChange={() => {}} />
          </View>
          <View style={styles.row}>
            <ThemedText>Microphone Access</ThemedText>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </Animatable.View>

        {/* About Section */}
        <Animatable.View animation="fadeInUp" delay={800} style={styles.card}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>About</ThemedText>
          <ThemedText>Version 1.0.0</ThemedText>
          <ThemedText>© 2025 Responda Team</ThemedText>
        </Animatable.View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerImage: {
    bottom: -60,
    left: -20,
    position: 'absolute',
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 12,
    color: '#4a90e2',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
});
