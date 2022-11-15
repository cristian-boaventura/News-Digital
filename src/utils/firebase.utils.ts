// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  NextOrObserver,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yIzwBJSgoc4NHsmFY6bym7Kr4zoHuyg",
  authDomain: "news-digital-93ea0.firebaseapp.com",
  projectId: "news-digital-93ea0",
  storageBucket: "news-digital-93ea0.appspot.com",
  messagingSenderId: "886928354060",
  appId: "1:886928354060:web:cec695b41f522ed9de3729",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const emailSignUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const { user } = userCredential;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const { user } = userCredential;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;

    return user;
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    throw error;
  }
};

export const userSignOut = async () => {
  try {
    signOut(auth);
    // Sign-out successful.
  } catch (error) {
    // An error happened.
    throw error;
  }
};

export const authStateListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

const db = getFirestore(app);

export const getStore = async (user: string) => {
  try {
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setStore = async (user: string, store: object) => {
  try {
    const docRef = doc(db, "users", user);

    await setDoc(docRef, store, { merge: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
