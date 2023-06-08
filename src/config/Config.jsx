import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-296a0.firebaseapp.com",
  projectId: "real-estate-app-296a0",
  storageBucket: "real-estate-app-296a0.appspot.com",
  messagingSenderId: "655052122908",
  appId: "1:655052122908:web:6ce7eb6ac31e0818d928d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
