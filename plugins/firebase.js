import firebase from 'firebase/app';
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx6m7dAGwH0z6_GR22a0ER8QHKg1LO1Ds",
  authDomain: "nuxt-1-61acf.firebaseapp.com",
  projectId: "nuxt-1-61acf",
  storageBucket: "nuxt-1-61acf.appspot.com",
  messagingSenderId: "397101386036",
  appId: "1:397101386036:web:d3f77c6cd29bc6966dfd61",
  measurementId: "G-2Q880LPR8T"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { firebase, db, auth, storage };
