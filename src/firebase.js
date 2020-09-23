import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQmAPyE8aSOUaAyQkNxhwTDPWoe4ouNbc",
  authDomain: "twitterclone-781e9.firebaseapp.com",
  databaseURL: "https://twitterclone-781e9.firebaseio.com",
  projectId: "twitterclone-781e9",
  storageBucket: "twitterclone-781e9.appspot.com",
  messagingSenderId: "34065041421",
  appId: "1:34065041421:web:f63d200a18caa1fd0c6d44",
  measurementId: "G-PKM1ES6L2C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
