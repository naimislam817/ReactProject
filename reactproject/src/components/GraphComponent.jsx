// src/components/GraphComponent.jsx
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the graph
const data = [
  { name: 'Jan', users: 400, revenue: 2400 },
  { name: 'Feb', users: 300, revenue: 2210 },
  { name: 'Mar', users: 200, revenue: 2290 },
  { name: 'Apr', users: 278, revenue: 2000 },
  { name: 'May', users: 189, revenue: 2181 },
  { name: 'Jun', users: 239, revenue: 2500 },
];

function GraphComponent() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphComponent;
