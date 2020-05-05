import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmAw5icBgtYvdW1IbHs1kIZjjz-W4B2GI",
  authDomain: "clothing-shop-98b58.firebaseapp.com",
  databaseURL: "https://clothing-shop-98b58.firebaseio.com",
  projectId: "clothing-shop-98b58",
  storageBucket: "clothing-shop-98b58.appspot.com",
  messagingSenderId: "250387665223",
  appId: "1:250387665223:web:8916e2fdc8eab29c27fc62",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
