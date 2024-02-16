import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVE9iW561guUwnqcCg3A1pPFi7SU5xzGc",
  authDomain: "tesla-app-3b813.firebaseapp.com",
  projectId: "tesla-app-3b813",
  storageBucket: "tesla-app-3b813.appspot.com",
  messagingSenderId: "263325672097",
  appId: "1:263325672097:web:00cec0f1081293300846e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
