import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyBP2aw77yGuAvpZtxgyZf0yv09_Ts4BjEc",
    authDomain: "techthread-a071d.firebaseapp.com",
    projectId: "techthread-a071d",
    storageBucket: "techthread-a071d.appspot.com",
    messagingSenderId: "530986085344",
    appId: "1:530986085344:web:6124677a91b45085a89985"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const storage = firebase.storage();

export default firebase


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { firestore, collection, getDocs } from 'firebase/firestore/lite';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBP2aw77yGuAvpZtxgyZf0yv09_Ts4BjEc",
//   authDomain: "techthread-a071d.firebaseapp.com",
//   projectId: "techthread-a071d",
//   storageBucket: "techthread-a071d.appspot.com",
//   messagingSenderId: "530986085344",
//   appId: "1:530986085344:web:6124677a91b45085a89985"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore()
// const storage = firebase.storage();
// export {db, storage}
