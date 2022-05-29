// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6pRpbBrAnQbb6bAQY3gRvhCqBw7TkzPk",
  authDomain: "geoex-c5acd.firebaseapp.com",
  projectId: "geoex-c5acd",
  storageBucket: "geoex-c5acd.appspot.com",
  messagingSenderId: "1049749498673",
  appId: "1:1049749498673:web:9d4f0b0c100b376b76de10"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth();

const db = getFirestore();

export { auth, db };




