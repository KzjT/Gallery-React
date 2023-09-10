import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    // Tu configuración de Firebase aquí

    apiKey: "AIzaSyBASrWNULgOEW-2HaZvMICTwrUzVi6TC84",
    authDomain: "gallery-art-e9d4b.firebaseapp.com",
    projectId: "gallery-art-e9d4b",
    storageBucket: "gallery-art-e9d4b.appspot.com",
    messagingSenderId: "704757234453",
    appId: "1:704757234453:web:412763083ba8be3633871c"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


//*************************************************************** */
/*

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import jsonData from "./data.json"


const cargarDatosDesdeJSON = async () => {
    const productos = jsonData; // Ajusta esto según la estructura de tu JSON
  
    try {
      // Verificar si la colección "productos" está vacía
      const productosRef = collection(db, "productos");
      const productosSnapshot = await getDocs(productosRef);
  
      if (productosSnapshot.size === 0) {
        // Agregar cada producto a la colección "productos" en Firestore
        for (const producto of productos) {
          await addDoc(productosRef, producto);
        }
        console.log("Datos cargados exitosamente en Firestore.");
      } else {
        console.log("La colección 'productos' ya contiene datos, no se realizaron cambios.");
      }
    } catch (error) {
      console.error("Error al cargar los datos en Firestore:", error);
    }
  };
  
  // Llama a la función para cargar los datos desde JSON
  cargarDatosDesdeJSON();
  */