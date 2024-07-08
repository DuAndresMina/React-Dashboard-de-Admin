// ChartComponent.js

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'C:/Users/duvan/OneDrive/Documentos/GitHub/React-Dashboard-de-Admin/react-dashboard-admin/src/App.css'

const ChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="50%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="Chrome" stroke="#8884d8" />
        <Line type="monotone" dataKey="Safari" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Edge"stroke="#8884c6"  />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
