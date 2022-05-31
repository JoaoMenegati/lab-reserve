import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
