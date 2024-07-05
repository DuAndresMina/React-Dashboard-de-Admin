// App.js

import React, { useState } from 'react';
import Firebase from './Sidebar';
import ChartComponent from './ChartComponent';
import { db } from './Firebase/firebase'; // Importar la exportación nombrada db

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Firebase db={db} setData={setData} />
      <ChartComponent data={data} />
    </div>
  );
};

export default App;
