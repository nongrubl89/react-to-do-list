// import dotenv from "dotenv";
// import * as firebase from "firebase/app";
import firebase from "firebase/app";
require("firebase/auth");
// dotenv.config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1yMAMC-TWs1QDG0XhaVzeQ8eOD_4pvVg",
  authDomain: "react-to-do-22865.firebaseapp.com",
  projectId: "react-to-do-22865",
  storageBucket: "react-to-do-22865.appspot.com",
  messagingSenderId: "715680933684",
  appId: "1:715680933684:web:141a8845f6e24514a92761",
});

export default app;
