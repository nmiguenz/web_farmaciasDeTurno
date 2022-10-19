// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtmnxB5wWIY1iac0RYFkNbgSLJjyHfoI4",
  authDomain: "web-deturno.firebaseapp.com",
  projectId: "web-deturno",
  storageBucket: "web-deturno.appspot.com",
  messagingSenderId: "309784192914",
  appId: "1:309784192914:web:f0d5ced82bd7a68a7e434b",
  measurementId: "G-174FW38SJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a collection from your database
export const getCollection = async (nombreColeccion) => {
  const colRef = collection(db, nombreColeccion)
  const docs = await getDocs(colRef);
  return docs;
}

//Upload to the database
export const alta = async (nombreColeccion, objeto) =>{ 
  const docRef = await addDoc(collection(db,nombreColeccion),objeto);
  return docRef;
}

