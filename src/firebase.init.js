// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCqvmyX2v5WdhDxNEQ2TeEq2AQi-2bhyN8",
  authDomain: "auto-shop-c28f4.firebaseapp.com",
  projectId: "auto-shop-c28f4",
  storageBucket: "auto-shop-c28f4.appspot.com",
  messagingSenderId: "606041594407",
  appId: "1:606041594407:web:829cddbfc0f92f1099cc02",
  measurementId: "G-8Z2SM4ZSQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;