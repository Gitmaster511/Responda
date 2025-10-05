import React from "react";
import {
 View,
 Text,
 StyleSheet,
 ScrollView,
 Image,
 TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


export default function HomeScreen() {
 const router = useRouter();


 return (
   <LinearGradient
     colors={["#4a90e2", "#6dd5fa", "#ffffff"]}
     style={styles.background}
   >
     <ScrollView contentContainerStyle={styles.scrollContainer}>
       {/* Hero Section */}
       <Animatable.View
         animation="fadeInDown"
         duration={1000}
         style={styles.heroContainer}
       >
         <Image
           source={{
             uri: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png",
           }}
           style={styles.heroImage}
         />
         <Text style={styles.title}>Responda</Text>
         <Text style={styles.subtitle}>
           Safety. Connection. Peace of Mind.
         </Text>
       </Animatable.View>


       {/* Quick Access Cards */}
       <Animatable.View
         animation="fadeInUp"
         delay={300}
         style={styles.cardContainer}
       >
         <TouchableOpacity
           style={styles.card}
           onPress={() => router.push("/device")}
         >
           <MaterialIcons name="sensors" size={32} color="#4a90e2" />
           <Text style={styles.cardText}>Device Status</Text>
         </TouchableOpacity>


         <TouchableOpacity
           style={styles.card}
           onPress={() => router.push("/notifications")}
         >
           <MaterialIcons name="notifications-active" size={32} color="#4a90e2" />
           <Text style={styles.cardText}>Fall Alerts</Text>
         </TouchableOpacity>


         <TouchableOpacity
           style={styles.card}
           onPress={() => router.push("/reminders")}
         >
           <MaterialIcons name="schedule" size={32} color="#4a90e2" />
           <Text style={styles.cardText}>Set Reminders</Text>
         </TouchableOpacity>
       </Animatable.View>


       {/* Info Section */}
       <Animatable.View
         animation="fadeInUp"
         delay={600}
         style={styles.infoContainer}
       >
         <Text style={styles.infoTitle}>Stay Connected</Text>
         <Text style={styles.infoText}>
           Responda monitors real-time activity and sends instant alerts if
           unusual movement or a fall is detected.
         </Text>
         <Text style={styles.infoText}>
           You can also check live status, set reminders, and review event
           history right from your phone.
         </Text>
       </Animatable.View>


       {/* Footer */}
       <View style={styles.footer}>
        
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
   marginBottom: 20,
   marginTop: 25,
 },
 heroImage: {
   width: 120,
   height: 120,
   marginBottom: 15,
 },
 title: {
   fontSize: 30,
   fontWeight: "bold",
   color: "#fff",
 },
 subtitle: {
   fontSize: 16,
   color: "#eaf4ff",
   textAlign: "center",
 },
 cardContainer: {
   flexDirection: "row",
   flexWrap: "wrap",
   justifyContent: "space-between",
   marginTop: 10,
 },
 card: {
   width: "47%",
   backgroundColor: "#fff",
   borderRadius: 12,
   paddingVertical: 20,
   paddingHorizontal: 10,
   alignItems: "center",
   marginVertical: 10,
   shadowColor: "#000",
   shadowOpacity: 0.15,
   shadowRadius: 8,
   shadowOffset: { width: 0, height: 4 },
   elevation: 4,
 },
 cardText: {
   marginTop: 8,
   fontSize: 15,
   fontWeight: "600",
   color: "#333",
 },
 infoContainer: {
   marginTop: 20,
   backgroundColor: "#f9fbff",
   borderRadius: 16,
   padding: 20,
   shadowColor: "#000",
   shadowOpacity: 0.1,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 6,
 },
 infoTitle: {
   fontSize: 20,
   fontWeight: "700",
   color: "#4a90e2",
   marginBottom: 8,
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



