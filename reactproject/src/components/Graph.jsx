import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

function Graph({ data }) {
  // Convert title length into numeric data just for demo
  const chartData = data.map((item, index) => ({
    name: `Post ${index + 1}`,
    value: item.title.length,
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Graph of Title Lengths</h3>
      <LineChart width={600} height={300} data={chartData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

Graph.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Graph;