import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdKF4WPtboYbILwoOcws-A3xLQrvJeEcU",
  authDomain: "chat-ad917.firebaseapp.com",
  projectId: "chat-ad917",
  storageBucket: "chat-ad917.appspot.com",
  messagingSenderId: "991217891387",
  appId: "1:991217891387:web:b834f2e2e3ee38df29441e"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)