import React, { useState } from 'react';
import axios from 'axios';
import Graph from '../components/Graph';
import EmployeeList from '../components/EmployeeList';

function DashboardPage() {
  const [apiData, setApiData] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setApiData(response.data.slice(0, 5));
    } catch (error) {
      console.error('API fetch error:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('User fetch error:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={fetchPosts} style={{ marginRight: '1rem' }}>Fetch Posts</button>
        <button onClick={() => setShowGraph(true)} disabled={apiData.length === 0}>Display Graph</button>
        <button onClick={fetchUsers} style={{ marginLeft: '1rem' }}>Load Employees</button>
      </div>

      {apiData.length > 0 && (
        <ul>
          {apiData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}

      {showGraph && <Graph data={apiData} />}

      {users.length > 0 && <EmployeeList users={users} />}
    </div>
  );
}

export default DashboardPage;
