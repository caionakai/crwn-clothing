import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC18cWXsAkzHC4QQUoksg-pLQW0XiQ6V5E",
  authDomain: "crwn-db-94265.firebaseapp.com",
  databaseURL: "https://crwn-db-94265.firebaseio.com",
  projectId: "crwn-db-94265",
  storageBucket: "",
  messagingSenderId: "1067523720934",
  appId: "1:1067523720934:web:01cd014bd6dff73b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
