import React from 'react';
import Home from './Pages/Home';
import FirstGraph from './Pages/FirstGrafic';
import SG from './Pages/Secondgra';
import TG from './Pages/ThreeGra';
import Navbar from './Componets/Navbar';
import Sidebar from './Componets/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'C:/Users/duvan/OneDrive/Documentos/GitHub/React-Dashboard-de-Admin/react-dashboard-admin/src/App.css'; // Assuming correct path

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/Home" exact={true} element={<Home />} />
            <Route path="/FirstGraph" exact={true} element={<FirstGraph/>} />
            <Route path="/SecondGraph" exact={true} element={<SG />} />
            <Route path="/ThreeGraph" exact={true} element={<TG />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;