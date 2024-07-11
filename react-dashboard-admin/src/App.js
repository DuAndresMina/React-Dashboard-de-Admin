import React from 'react';
import Home from './Pages/Home';
import FirstGraph from './Pages/FirstGrafic';
import SecondGraph from './Pages/Secondgraph';
import TG from './Pages/ThreeGra';
import MyNavbar from './Componets/Navbar';
import Sidebar from './Componets/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Assuming correct path for App.css


const App = () => {
  return (
    <Router>
      <div className="app-container">

        <Sidebar />
        <div className="main-content">
          <MyNavbar />
          <div className="content">
            <Routes>
              <Route path="/Home" exact={true} element={<Home />} />
              <Route path="/FirstGraph" exact={true} element={<FirstGraph />} />
              <Route path="/SecondGraph" exact={true} element={<SecondGraph/>} />
              <Route path="/ThreeGraph" exact={true} element={<TG />} />
              <Route path="*" element={<Navigate to="/Home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
