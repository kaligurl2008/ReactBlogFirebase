// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


//import for firestore
import {getFirestore} from 'firebase/firestore'

//import for authentication
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw07yV8ZZUoO0rtzuTWjdg3neEQah1Qk8",
  authDomain: "react-firebase-blog-7c7ae.firebaseapp.com",
  projectId: "react-firebase-blog-7c7ae",
  storageBucket: "react-firebase-blog-7c7ae.appspot.com",
  messagingSenderId: "318303917885",
  appId: "1:318303917885:web:311963490f28088c0d5754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up database "hook" and export it
export const db = getFirestore(app)

//activate authentication
export const auth = getAuth(app)