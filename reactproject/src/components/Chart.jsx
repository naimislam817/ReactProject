// src/components/Chart.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler, // Import Filler for filled area charts
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

const ChartComponent = ({ initialData, title = "Data Over Time" }) => {
  const chartRef = useRef(null);

  // Static default data if nothing is provided
  const defaultData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        borderColor: '#007bff',
        tension: 0.3,
      },
    ],
  };

  const dataToDisplay = initialData || defaultData;

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fill container height
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Optional: Destroy chart instance on component unmount to prevent memory leaks
  // or issues if ChartJS doesn't handle it internally with React.
  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => {
      if (chartInstance) {
        // chartInstance.destroy(); // This might be needed with older versions or specific use cases
      }
    };
  }, []);

  return (
    // Ensure the container has a defined height for maintainAspectRatio: false to work well
    // This can be done via CSS on the parent or here directly.
    // The parent .chartContainer in DashboardPage.module.css should handle this
    // Or add a style like style={{ height: '300px' }} to this div if needed.
    // The class "card-base" is now applied on the parent div in DashboardPage.jsx for this component
    <div>
      {/* The h5 is removed as title is now in chart options */}
      <Line ref={chartRef} data={dataToDisplay} options={options} />
    </div>
  );
};

ChartComponent.propTypes = {
  initialData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        fill: PropTypes.bool,
        borderColor: PropTypes.string,
        tension: PropTypes.number,
        backgroundColor: PropTypes.string,
      })
    ).isRequired,
  }),
  title: PropTypes.string,
  
};

export default ChartComponent;