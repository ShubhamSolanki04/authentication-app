import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8sjK0ts5ktV68-B253z3emABRoG_UEvE",
  authDomain: "fir-authentication-3aa41.firebaseapp.com",
  projectId: "fir-authentication-3aa41",
  storageBucket: "fir-authentication-3aa41.appspot.com",
  messagingSenderId: "1050703845336",
  appId: "1:1050703845336:web:d76fd92c2cedfda77684ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)