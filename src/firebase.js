// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfY_hc9vxALhRs5FUBDvmOsCcGJQcT2As",
  authDomain: "unwindchat-firebase.firebaseapp.com",
  projectId: "unwindchat-firebase",
  storageBucket: "unwindchat-firebase.appspot.com",
  messagingSenderId: "1038711599117",
  appId: "1:1038711599117:web:79c40d031979da5b9fe544",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
