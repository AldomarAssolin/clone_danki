// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAvcEXp6JhcY1B7mpzBsd58QrGbfdahX3w",
  authDomain: "testlogin-784c7.firebaseapp.com",
  projectId: "testlogin-784c7",
  storageBucket: "testlogin-784c7.appspot.com",
  messagingSenderId: "1054843681793",
  appId: "1:1054843681793:web:7c11724ef0cabc5d615400",
  measurementId: "G-376R7ENK05"
};

// Initialize Firebase
const app = initializeApp(config);
export default app
//const analytics = getAnalytics(app);