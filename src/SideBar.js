import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Company Name</h3>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item active">Dashboard</li>
        <li className="menu-item">Products</li>
        <li className="menu-item">Consignment</li>
        <li className="menu-item">Appointment</li>
      </ul>
    </div>
  );
};

export default Sidebar;