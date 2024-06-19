import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import dotenv from 'dotenv';
console.log("hello world");
dotenv.config();


const firebaseConfig = {
  apiKey: import.meta.env.firebase_apikey,
  authDomain: import.meta.env.firebase_authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.firebase_storageBucket,
  messagingSenderId: import.meta.env.firebase_messagingSensorId,
  appId: import.meta.env.firebase_appId,
  measurementId: import.meta.env.firebase_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

