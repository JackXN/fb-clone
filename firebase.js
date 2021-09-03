// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {firebase} from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBP2aw77yGuAvpZtxgyZf0yv09_Ts4BjEc",
  authDomain: "techthread-a071d.firebaseapp.com",
  projectId: "techthread-a071d",
  storageBucket: "techthread-a071d.appspot.com",
  messagingSenderId: "530986085344",
  appId: "1:530986085344:web:134f7d09e7182650a89985"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();
export {db, storage}
