// FirstGraph.js
import React, { useState } from 'react';
import ChartComponent from '../ChartComponent'; // Assuming correct path
import Data from '../Data'; // Assuming correct path
import { db } from '../Firebase/firebase'; // Assuming correct path

const FirstGraph = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Data db={db} setData={setData} />
      <ChartComponent data={data} />
    </div>
  );
};

export default FirstGraph;
