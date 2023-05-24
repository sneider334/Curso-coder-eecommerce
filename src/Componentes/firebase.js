import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNYHxbm2UxRmFW72oopj-wJKIyHmO_4c8",
  authDomain: "e-commerce-coder-4fcf8.firebaseapp.com",
  projectId: "e-commerce-coder-4fcf8",
  storageBucket: "e-commerce-coder-4fcf8.appspot.com",
  messagingSenderId: "736302480594",
  appId: "1:736302480594:web:cf483d6c84f4d39212c10b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


