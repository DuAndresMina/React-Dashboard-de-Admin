import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";

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

function Data({ db, setData }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getData(db)
      .then((data) => {
        if (isMounted) {
          setData(data);
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

  return null; // Or any other UI to show when data is loaded
}

export default Data;
