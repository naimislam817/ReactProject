// src/components/Navbar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
// You might want to add icons later, e.g., from react-icons
// import { Bell, UserCircle } from 'react-icons/fi';

function Navbar({ title = "My Dashboard" }) {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.navbarTitle}>{title}</h2>
      <div className={styles.navbarActions}>
        {/* Placeholder for actions like notifications or user profile */}
        {/* <button className={styles.actionButton}><Bell size={20} /></button> */}
        {/* <button className={styles.actionButton}><UserCircle size={20} /></button> */}
        <span>Welcome, User!</span>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;