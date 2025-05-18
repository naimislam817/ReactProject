// src/pages/FetchAPI.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FetchAPI.css'; // optional styling

function FetchAPI() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        setEmployees(response.data.data); // Access nested data
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="fetch-container">
      <h2>Employee List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            <strong>{emp.employee_name}</strong> – Salary: ${emp.employee_salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAPI;
