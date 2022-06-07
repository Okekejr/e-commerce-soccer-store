import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

interface Ibase {
  uid: string;
  displayName?: string | null;
  email?: string | null;
}

const firebaseConfig = {
  apiKey: "AIzaSyDbZbYupRbbw6JX6M0_VFhiVpdRECdJWqE",
  authDomain: "soccer-store-8b439.firebaseapp.com",
  projectId: "soccer-store-8b439",
  storageBucket: "soccer-store-8b439.appspot.com",
  messagingSenderId: "123621571775",
  appId: "1:123621571775:web:34458e3919242043fe1a0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: Ibase) => {
  const userDocRef = doc(database, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("error creating user", error.message);
    }
  }
};
