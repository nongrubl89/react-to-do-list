// import dotenv from "dotenv";
// import * as firebase from "firebase/app";
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
// dotenv.config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1yMAMC-TWs1QDG0XhaVzeQ8eOD_4pvVg",
  authDomain: "react-to-do-22865.firebaseapp.com",
  projectId: "react-to-do-22865",
  storageBucket: "react-to-do-22865.appspot.com",
  messagingSenderId: "715680933684",
  appId: "1:715680933684:web:141a8845f6e24514a92761",
  databaseURL: "https://react-to-do-22865-default-rtdb.firebaseio.com/",
});
// firebase.initializeApp(app);
const database = firebase.firestore();

export { app, database };
