import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css'; // Assuming correct path for App.css

const ChartComponent = ({ data }) => {
  const [selectedBrowser, setSelectedBrowser] = useState('All');

  // Extraer los nombres de los navegadores únicos
  const browserNames = [...new Set(data.flatMap(item => Object.keys(item)).filter(key => key !== 'Date'))];

  const handleBrowserChange = (e) => {
    setSelectedBrowser(e.target.value);
  };

  return (
    <div className="chart-container">
      <div className="browser-filter-container">
        <label htmlFor="browser-select">Select Browser: </label>
        <select id="browser-select" onChange={handleBrowserChange}>
          <option value="All">All</option>
          {browserNames.map(browser => (
            <option key={browser} value={browser}>{browser}</option>
          ))}
        </select>
      </div>
      <ResponsiveContainer className="responsive-container" height={400}>
        <LineChart data={data}>
          {browserNames.map((browser, index) => (
            (selectedBrowser === 'All' || selectedBrowser === browser) && (
              <Line key={browser} type="monotone" dataKey={browser} stroke={`hsl(${index * 40}, 70%, 50%)`} />
            )
          ))}
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
