// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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