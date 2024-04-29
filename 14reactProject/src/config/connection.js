// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,set,ref,onValue,update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtu475t65Lo6ObSvJiT_xNRzh8rTb6yUk",
  authDomain: "confess-note-project.firebaseapp.com",
  projectId: "confess-note-project",
  storageBucket: "confess-note-project.appspot.com",
  messagingSenderId: "761877959292",
  databaseUrl:"https://confess-note-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
  appId: "1:761877959292:web:e502239faa831144d12ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database,ref,set,update,onValue};