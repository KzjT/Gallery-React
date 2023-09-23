
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBASrWNULgOEW-2HaZvMICTwrUzVi6TC84",
  authDomain: "gallery-art-e9d4b.firebaseapp.com",
  projectId: "gallery-art-e9d4b",
  storageBucket: "gallery-art-e9d4b.appspot.com",
  messagingSenderId: "704757234453",
  appId: "1:704757234453:web:412763083ba8be3633871c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

