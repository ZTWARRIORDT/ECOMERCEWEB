// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj6rHNfnAlqaxou5HK-o6hRMdHQLLwSGI",
  authDomain: "ecommerceweb-b6ea4.firebaseapp.com",
  projectId: "ecommerceweb-b6ea4",
  storageBucket: "ecommerceweb-b6ea4.firebasestorage.app",
  messagingSenderId: "79167537896",
  appId: "1:79167537896:web:1bd9394399c98127fd3f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth };