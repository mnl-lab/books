// ~/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdh_CCQxYi85UZxeByvYN_Xo7fLArJ5hA",
    authDomain: "fake-store-39c5c.firebaseapp.com",
    projectId: "fake-store-39c5c",
    storageBucket: "fake-store-39c5c.firebasestorage.app",
    messagingSenderId: "536959375104",
    appId: "1:536959375104:web:be02bf93555bcae84205e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
