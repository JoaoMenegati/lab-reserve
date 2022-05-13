// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5wA903d9dE497ILo0Llhj0kKn-7OYhdI",
  authDomain: "labreserve-c6832.firebaseapp.com",
  databaseURL: "https://labreserve-c6832-default-rtdb.firebaseio.com",
  projectId: "labreserve-c6832",
  storageBucket: "labreserve-c6832.appspot.com",
  messagingSenderId: "783406218593",
  appId: "1:783406218593:web:a9c361ead76a054e921920",
  measurementId: "G-7S2WNJ80MN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
