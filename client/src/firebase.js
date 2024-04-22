// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-96bbf.firebaseapp.com",
  projectId: "mern-blog-96bbf",
  storageBucket: "mern-blog-96bbf.appspot.com",
  messagingSenderId: "967770114688",
  appId: "1:967770114688:web:e58f89faf79b21f305f465"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);