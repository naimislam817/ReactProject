// src/pages/AnalyticsPage.jsx
import React from 'react';
import Chart from '../components/Chart'; // Assuming Chart will be part of analytics

const AnalyticsPage = () => {
  return (
    <div>
      <h2>Analytics</h2>
      <p>Detailed analytics and reports will be shown here.</p>
      {/* You can include more charts or data tables here */}
      <Chart />
    </div>
  );
};

export default AnalyticsPage;