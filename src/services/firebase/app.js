// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFUcbFlc809djUt8ny2HpKQKu62uG4L1I",
  authDomain: "soundcloud-c0765.firebaseapp.com",
  databaseURL: "https://soundcloud-c0765-default-rtdb.firebaseio.com",
  projectId: "soundcloud-c0765",
  storageBucket: "soundcloud-c0765.appspot.com",
  messagingSenderId: "459823438763",
  appId: "1:459823438763:web:31feb60dee7632876f10ee",
  measurementId: "G-LJQMZ21EZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;