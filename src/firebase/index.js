
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvJR6CJEK9vPBZwu-LirOnRPp0AOXccdY",
  authDomain: "vue-auth-cb14a.firebaseapp.com",
  projectId: "vue-auth-cb14a",
  storageBucket: "vue-auth-cb14a.appspot.com",
  messagingSenderId: "926064198290",
  appId: "1:926064198290:web:226e654b3071108ead9c4b"
};

const app = initializeApp( firebaseConfig );

const auth = getAuth( app );

const db = getFirestore( app );

export { auth, db }