// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,set,update,onValue,ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEE_y7bmJzn4ZBoSFaG_aCu9QGZSa1AA0",
  authDomain: "first-project-a57dc.firebaseapp.com",
  databaseURL: "https://first-project-a57dc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-project-a57dc",
  storageBucket: "first-project-a57dc.appspot.com",
  messagingSenderId: "359722438268",
  appId: "1:359722438268:web:394bc7cd071abeac5c03f9",
  measurementId: "G-1FCPPXLF5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database,set,update,ref,onValue};
