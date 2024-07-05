// Sidebar.js (Firebase.js)

import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from './Firebase/firebase'; // Importar la exportación nombrada db

function getData(db) {
  const dataRef = ref(db, '/');
  return new Promise((resolve, reject) => {
    onValue(dataRef, (snapshot) => {
      resolve(snapshot.val());
    }, (error) => {
      reject(error);
    });
  });
}

function Firebase({ db, setData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getData(db)
      .then((data) => {
        if (isMounted) {
          const transformedData = Object.keys(data).map(key => {
            return { ...data[key], id: key };
          });
          setData(transformedData);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [db, setData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null; // No necesitas renderizar nada aquí
}

export default Firebase;
