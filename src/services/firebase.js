import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyCq18KBKU_ZDmDv_EsWU7mCc-OvKFuD9v0",
  authDomain: "chatbrat-f5edd.firebaseapp.com",
  databaseURL: "https://chatbrat-f5edd.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();