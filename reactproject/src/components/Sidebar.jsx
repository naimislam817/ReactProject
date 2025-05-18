// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';
// Example: npm install react-icons
// import { FiGrid, FiBarChart2, FiSettings } from 'react-icons/fi';

const menuItems = [
  { path: '/dashboard', name: 'Dashboard' /*icon: <FiGrid />*/ },
  { path: '/analytics', name: 'Analytics' /*icon: <FiBarChart2 />*/ },
  { path: '/settings', name: 'Settings' /*icon: <FiSettings />*/ },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        {/* You could put a logo here */}
        <h3>Project X</h3>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {/*item.icon && <span className={styles.icon}>{item.icon}</span>*/}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// No props for now, but good practice
Sidebar.propTypes = {};

export default Sidebar;