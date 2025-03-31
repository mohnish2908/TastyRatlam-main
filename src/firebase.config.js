import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDonw5aecPQPpPwa85NTi4G968jNhbO3RI",
  authDomain: "tastyratlam-9090.firebaseapp.com",
  projectId: "tastyratlam-9090",
  storageBucket: "tastyratlam-9090.appspot.com",
  messagingSenderId: "20756049970",
  appId: "1:20756049970:web:6f3235f428514a1c490c2b",
  measurementId: "G-ZJ503BF9JE"
};




// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };