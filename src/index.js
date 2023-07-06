import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvzbpehOQ6auH6d_e7gAojbDVqNHtsWsk",
  authDomain: "tienda-abaf2.firebaseapp.com",
  projectId: "tienda-abaf2",
  storageBucket: "tienda-abaf2.appspot.com",
  messagingSenderId: "349867807044",
  appId: "1:349867807044:web:6bc66c5aded7cba8fd8711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
