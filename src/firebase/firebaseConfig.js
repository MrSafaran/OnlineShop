// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD0bRVUVE9NRZLRlUnTQG8ju2BwzvuLx4g",
    authDomain: "onlineshop-194b4.firebaseapp.com",
    projectId: "onlineshop-194b4",
    storageBucket: "onlineshop-194b4.appspot.com",
    messagingSenderId: "976189336227",
    appId: "1:976189336227:web:68d36c8ea09852bc552d16",
    measurementId: "G-8X0H6XXLSN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
