import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcI7GFCVUtXuJIpuHoqwfa6jf6hRGQl5w",
  authDomain: "fedin-e8e9e.firebaseapp.com",
  projectId: "fedin-e8e9e",
  storageBucket: "fedin-e8e9e.appspot.com",
  messagingSenderId: "35546698666",
  appId: "1:35546698666:web:15c07341c180f008c3d1d3",
  measurementId: "G-FHF1HMR0YZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
