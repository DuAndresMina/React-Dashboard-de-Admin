import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// Configura los detalles de la conexión a la base de datos
const firebaseConfig = {
  apiKey: "AIzaSyA3VTdPINWUsAQveIEEm2ogBrRHq-jWGPY",
  authDomain: "react-dashboard-de-admin.firebaseapp.com",
  databaseURL: "https://react-dashboard-de-admin-default-rtdb.firebaseio.com",
  projectId: "react-dashboard-de-admin",
  storageBucket: "react-dashboard-de-admin.appspot.com",
  messagingSenderId: "369577681592",
  appId: "1:369577681592:web:00cbc5376e0ad588ea4a4d",
  measurementId: "G-TBL8MCK8PQ"
};


console.log("Firebase Config: ", firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 

const dataRef = ref(db, '/'); // Usar la función ref para obtener la referencia

onValue(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Esto mostrará los datos obtenidos
});

export { db }; // Exportar db como un valor nombrado
