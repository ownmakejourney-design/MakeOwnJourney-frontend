// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/app/";
// const firebaseConfig = {
//   apiKey: "AIzaSyAVIYqvB58DitUpkB1VKjZjykSodAFJqpw",
//   authDomain: "phone-auth-app-74c04.firebaseapp.com",
//   projectId: "phone-auth-app-74c04",
//   storageBucket: "phone-auth-app-74c04.firebasestorage.app",
//   messagingSenderId: "565112225198",
//   appId: "1:565112225198:web:5b3b1100a95ef0bade5c3f",
//   measurementId: "G-P4N4L1RTJV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVIYqvB58DitUpkB1VKjZjykSodAFJqpw",
  authDomain: "phone-auth-app-74c04.firebaseapp.com",
  projectId: "phone-auth-app-74c04",
  storageBucket: "phone-auth-app-74c04.appspot.com",
  messagingSenderId: "565112225198",
  appId: "1:565112225198:web:5b3b1100a95ef0bade5c3f",
};

// 🔐 Prevent re-initialization (Next.js best practice)
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
