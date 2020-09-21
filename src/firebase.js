import * as firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyCs8bRENxuI2zDuh4VFH0EhUbfJtOpF8dY",
  authDomain: "mytodofb-5eed2.firebaseapp.com",
  databaseURL: "https://mytodofb-5eed2.firebaseio.com",
  projectId: "mytodofb-5eed2",
  storageBucket: "mytodofb-5eed2.appspot.com",
  messagingSenderId: "854186385236",
  appId: "1:854186385236:web:bf2df6c6ae1948dd5db2c1",
  measurementId: "G-2YSL5EZZ34",
});

var db = firebase.firestore();
export default db;