// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUcbFlc809djUt8ny2HpKQKu62uG4L1I",
  authDomain: "soundcloud-c0765.firebaseapp.com",
  projectId: "soundcloud-c0765",
  storageBucket: "soundcloud-c0765.appspot.com",
  messagingSenderId: "459823438763",
  appId: "1:459823438763:web:31feb60dee7632876f10ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;