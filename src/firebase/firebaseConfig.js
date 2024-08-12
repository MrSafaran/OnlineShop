// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFYw09zW2LNnVO2yBk__2z6nKNS2bEFY0",

    authDomain: "myshop-b4671.firebaseapp.com",
  
    projectId: "myshop-b4671",
  
    storageBucket: "myshop-b4671.appspot.com",
  
    messagingSenderId: "973413582355",
  
    appId: "1:973413582355:web:6e51c958674bac76a3e1e6",
  
    measurementId: "G-28QSD7FJW0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };


    // apiKey: "AIzaSyD0bRVUVE9NRZLRlUnTQG8ju2BwzvuLx4g",
    // authDomain: "onlineshop-194b4.firebaseapp.com",
    // projectId: "onlineshop-194b4",
    // storageBucket: "onlineshop-194b4.appspot.com",
    // messagingSenderId: "976189336227",
    // appId: "1:976189336227:web:68d36c8ea09852bc552d16",
    // measurementId: "G-8X0H6XXLSN"