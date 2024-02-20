import firbase from "firebase/compat/app";
//auth
import { getAuth } from 'firebase/auth';
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0w6FLqjLfslLZsnmwTTqu6CfqZVn_sO8",
  authDomain: "clone-e5171.firebaseapp.com",
  projectId: "clone-e5171",
  storageBucket: "clone-e5171.appspot.com",
  messagingSenderId: "439124909046",
  appId: "1:439124909046:web:dc5da7a8305e52256885d7",
};


// Initialize Firebase 

const app =firbase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = app.firestore();

