// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Graph from '../components/Graph'; // <-- new component

function DashboardPage() {
  const [apiData, setApiData] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setApiData(response.data.slice(0, 5)); // sample first 5 items
    } catch (error) {
      console.error('API fetch error:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <button onClick={fetchData}>Fetch API Data</button>
      <button onClick={() => setShowGraph(true)} disabled={apiData.length === 0}>
        Display Graph
      </button>

      {apiData.length > 0 && (
        <ul>
          {apiData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}

      {showGraph && <Graph data={apiData} />}
    </div>
  );
}

export default DashboardPage;
