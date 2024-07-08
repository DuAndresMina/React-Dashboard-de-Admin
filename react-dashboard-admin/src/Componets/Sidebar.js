import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link correctamente
import 'C:/Users/duvan/OneDrive/Documentos/GitHub/React-Dashboard-de-Admin/react-dashboard-admin/src/App.css'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/Home">Inicio</Link> 
        </li>
        <li>
          <Link to="/FirstGraph">First Dashboard</Link>
        </li>
        <li>
          <Link to="/SecondGraph">Second Dashboard</Link>
        </li>
        <li>
          <Link to="/ThreeGraph">Three Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
