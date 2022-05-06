import firebase from 'firebase';
// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 const firebaseConfig = {
   apiKey: "AIzaSyC81GoE-on20eTcOadx6rOStpKdUiVDjo0",
   authDomain: "login-bb7db.firebaseapp.com",
   projectId: "login-bb7db",
   storageBucket: "login-bb7db.appspot.com",
   messagingSenderId: "378722839757",
   appId: "1:378722839757:web:73c497ca7c335b45930d84"
 };


 const fire =firebase.initializeApp(firebaseConfig);
 export default fire;