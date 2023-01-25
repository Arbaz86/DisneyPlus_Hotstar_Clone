import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCzPFczeIMLBanOQZkD8-9aRQX3ozloKUI",
  authDomain: "disneyplus-clone-ac099.firebaseapp.com",
  projectId: "disneyplus-clone-ac099",
  storageBucket: "disneyplus-clone-ac099.appspot.com",
  messagingSenderId: "990810403275",
  appId: "1:990810403275:web:8955f817596c1d992e464e",
  measurementId: "G-L2CE8LXRZX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
