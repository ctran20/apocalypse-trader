// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmTmMzWfxQvpBG_TmTugiF7hZc2T54FSU',
  authDomain: 'apocalypse-trader-db.firebaseapp.com',
  projectId: 'apocalypse-trader-db',
  storageBucket: 'apocalypse-trader-db.appspot.com',
  messagingSenderId: '1097435681649',
  appId: '1:1097435681649:web:a491e41b3ff6469a8e9cd0',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
