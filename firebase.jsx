// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7jzeF9FetHS4j9n-ZURb7vkHBkJK4kb4",
  authDomain: "vaxx-149fb.firebaseapp.com",
  projectId: "vaxx-149fb",
  storageBucket: "vaxx-149fb.firebasestorage.app",
  messagingSenderId: "1059923741662",
  appId: "1:1059923741662:web:45d68d4056344ee39eab4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth } 