import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Import credentials from JSON (replace with your actual file path)
import firebaseConfig from 'react-dashboard-de-admin-firebase-adminsdk-3ogkz-048234a3b0.json';

// Initialize Firebase (replace with actual credentials if not using JSON)
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  const [hasData, setHasData] = useState(false); // Track data retrieval status
  const [data, setData] = useState(null); // Store retrieved data

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      // **Data Retrieval:**
      const ref = firebase.database().ref('/users/' + user.uid + '/roles');
      ref.on('value', (snapshot) => {
        const roles = snapshot.val();
        if (roles) { // Check if data exists
          setHasData(true);
          setData(roles);
        } else {
          setHasData(false);
          setData(null);
        }
      });
    }
  }, [user]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Usuario: {user.displayName}</h2>
      {hasData ? (
        <p>¡Tienes acceso a la base de datos!</p>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}

      {/* Conditionally render data if retrieved */}
      {hasData && data && (
        <div>
          <h3>Datos del usuario:</h3>
          {/* Access and display specific data fields based on your structure */}
          <p>Roles: {data.admin ? 'Administrador' : 'Usuario'}</p>
          {/* Add more data display logic here based on your data structure */}
          
        </div>
      )}
    </div>
  );
};

export default App;
