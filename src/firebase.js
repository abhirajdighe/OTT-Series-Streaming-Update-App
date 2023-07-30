// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBzpjcI3B_IupW6VpAGnRKvIhjPp7lr0RQ",
  authDomain: "disneyplus-clone-bbb9b.firebaseapp.com",
  projectId: "disneyplus-clone-bbb9b",
  storageBucket: "disneyplus-clone-bbb9b.appspot.com",
  messagingSenderId: "500966750011",
  appId: "1:500966750011:web:143dcb5dc73e72b623e91e",
  measurementId: "G-ERBE1JMCT4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;