import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-410413.firebaseapp.com",
  projectId: "blog-410413",
  storageBucket: "blog-410413.appspot.com",
  messagingSenderId: "820154127621",
  appId: "1:820154127621:web:0883bcf0955f2dedc6136c",
};

export const app = initializeApp(firebaseConfig);
