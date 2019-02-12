import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyBzIPSIfgWbOb34DXhz0GqKCty21vKS808",
  authDomain: "clube-1001.firebaseapp.com",
  databaseURL: "https://clube-1001.firebaseio.com",
  projectId: "clube-1001",
  storageBucket: "clube-1001.appspot.com",
  messagingSenderId: "633913252073"
};
firebase.initializeApp(config);
export const Datab = firebase.firestore();
export const St = firebase.storage();
export const Auth = firebase.auth();
