// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (for database)
export const db = getFirestore(app);

// Initialize Analytics safely (optional)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
