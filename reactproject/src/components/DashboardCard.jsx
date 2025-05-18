// src/components/DashboardCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardCard.module.css';
// import { FiUsers, FiDollarSign, FiShoppingCart } from 'react-icons/fi'; // Example icons

// const iconMap = {
//   users: <FiUsers size={28} />,
//   'dollar-sign': <FiDollarSign size={28} />,
//   'shopping-cart': <FiShoppingCart size={28} />,
// };

function DashboardCard({ title, value, icon, note }) {
  return (
    <div className={`${styles.dashboardCard} card-base`}> {/* Use card-base from index.css */}
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {/*icon && <div className={styles.cardIcon}>{iconMap[icon]}</div>*/}
      </div>
      <p className={styles.cardValue}>{value}</p>
      {note && <p className={styles.cardNote}>{note}</p>}
    </div>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string, // To map to an icon component
  note: PropTypes.string,
};

export default DashboardCard;