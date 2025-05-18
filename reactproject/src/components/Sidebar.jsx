import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

// Uncomment and install react-icons if you want to add icons:
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
        <h3>Project X</h3>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {menuItems.map(({ path, name }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                {/* {icon && <span className={styles.icon}>{icon}</span>} */}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
