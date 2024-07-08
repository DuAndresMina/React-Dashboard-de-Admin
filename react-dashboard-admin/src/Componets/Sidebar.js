import React from 'react';
import { NavLink } from 'react-router-dom'; // Importar Link correctamente
import 'C:/Users/duvan/OneDrive/Documentos/GitHub/React-Dashboard-de-Admin/react-dashboard-admin/src/App.css'
import { IoHomeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";
import { TbChartInfographic } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <NavLink to="/Home" className="text-dark rounded px-5 py-2" exact activeClassName= "active"> <IoHomeOutline className="me-2"size={22}/> Inicio</NavLink> 
        </li>
        <li>
          <NavLink to="/FirstGraph" className="text-dark rounded px-3 py-2" exact activeClassName= "active"> <GoGraph className="me-2"size={22}/> First Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/SecondGraph" className="text-dark rounded px-2 py-2" exact activeClassName= "active"> <VscGraph className="me-2"size={22}/> Second Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/ThreeGraph" className="text-dark rounded px-3 py-2" exact activeClassName= "active"> <TbChartInfographic className="me-2"size={22}/> Three Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
