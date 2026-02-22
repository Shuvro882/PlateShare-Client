// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe1MeldrvebnB4Iv6yDmTJg9mY_jduOxI",
  authDomain: "food-share-client-d904e.firebaseapp.com",
  projectId: "food-share-client-d904e",
  storageBucket: "food-share-client-d904e.firebasestorage.app",
  messagingSenderId: "360616066974",
  appId: "1:360616066974:web:c2ffdce58a500a5f44e08f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);