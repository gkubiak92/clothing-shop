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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user data", error.message);
    }
  }

  return userRef;
};

export default firebase;
