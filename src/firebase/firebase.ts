import { FirebaseInterface } from "@/models";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig: FirebaseInterface = {
  apiKey: "AIzaSyDtEtlC1jSdNw6pd8NLYyH5YeXWNFsjfeg",
  authDomain: "pokedex-app-f68f5.firebaseapp.com",
  projectId: "pokedex-app-f68f5",
  storageBucket: "pokedex-app-f68f5.appspot.com",
  messagingSenderId: "732462157598",
  appId: "1:732462157598:web:4382685296153d2dbe030f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
