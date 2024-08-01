// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbe-v42xNFJ2gSe_JnCn84xV07plC2ZRw",
  authDomain: "inventory-management-b1b9e.firebaseapp.com",
  projectId: "inventory-management-b1b9e",
  storageBucket: "inventory-management-b1b9e.appspot.com",
  messagingSenderId: "1040064294693",
  appId: "1:1040064294693:web:afba5be296ffeff795f4cc",
  measurementId: "G-KWKKS8N8ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};