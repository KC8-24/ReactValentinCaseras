import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyAg6uYsDkq1mliwqL1emhGnHr0t5grvNJU",
authDomain: "proyecto-coder-fac4a.firebaseapp.com",
projectId: "proyecto-coder-fac4a",
storageBucket: "proyecto-coder-fac4a.appspot.com",
messagingSenderId: "984354570767",
appId: "1:984354570767:web:0a08643e19216f1971997a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)