// src/pages/SettingsPage.jsx
import React from 'react';

const SettingsPage = () => {
  return (
    <div>
      <h2>Settings</h2>
      <p>Application settings and user preferences will be managed here.</p>
      {/* Example setting */}
      <div>
        <label htmlFor="theme-select">Theme: </label>
        <select id="theme-select">
          <option value="light">Light</option>
          <option value="dark">Dark (Not implemented)</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPage;