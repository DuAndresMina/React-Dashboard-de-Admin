import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
require('C:/Users/duvan/OneDrive/Documentos/GitHub/React-Dashboard-de-Admin/react-dashboard-admin/src/.env').config();

// Configura los detalles de la conexión a la base de datos
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 

const dataRef = ref(db, '/'); // Usar la función ref para obtener la referencia

onValue(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Esto mostrará los datos obtenidos
});

export { db }; // Exportar db como un valor nombrado
