
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz_UevmhAQct1XAfEWk9MT5laF7WkI00w",
  authDomain: "booking-app-fd322.firebaseapp.com",
  projectId: "react-native-booking-app-8f410",
  storageBucket: "react-native-booking-app-8f410.firebasestorage.app",
  messagingSenderId: "1365791193",
  appId: "1:1365791193:android:4092f1b266b5e99d0489c8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};