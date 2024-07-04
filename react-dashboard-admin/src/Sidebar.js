import React from 'react';
import logo from './download.png'

console.log(logo)

const Sidebar = () => {
  
  return (
    
    <div className="Sidebar">
      
        <div className="LogoAndName">
        <img src={logo} alt="Logotipo" width={25} height={25}/>
        <h1>DASHBOARD
        </h1>
        
        </div>
    </div>
  );
};

export default Sidebar;
