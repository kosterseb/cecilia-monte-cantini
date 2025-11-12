import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // For Cloud Firestore
import { getAuth } from 'firebase/auth';           // For Firebase Authentication

// Your web app's Firebase configuration
// This is the config object you copied from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAX_Jh7KNBdlR--02JpW9FKWKMb9qR35q0",
  authDomain: "hotel-donatello.firebaseapp.com",
  projectId: "hotel-donatello",
  storageBucket: "hotel-donatello.appspot.com",
  messagingSenderId: "552859898119",
  appId: "1:552859898119:web:37f6f36e5eafcee63e35a2",
  measurementId: "G-YBW19ZF7D8" // If you enabled Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services that you'll use
export const db = getFirestore(app);
export const auth = getAuth(app);
// You can export other services like getStorage(), getFunctions(), etc. as needed

// Optional: You can also export the app instance itself if needed
export default app;
