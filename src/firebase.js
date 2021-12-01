
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0L94tH5F1_4ZU9TojF-wVSMiRBmvNFkA",
  authDomain: "test-teamreporter-525ce.firebaseapp.com",
  projectId: "test-teamreporter-525ce",
  storageBucket: "test-teamreporter-525ce.appspot.com",
  messagingSenderId: "125181080559",
  appId: "1:125181080559:web:3bee0e890a46ba0e003c1a",
  measurementId: "G-C1N519GBY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

export default app;