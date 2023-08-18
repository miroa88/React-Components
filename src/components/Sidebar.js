import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Company Name</h3>
      </div>
      <ul className="sidebar-menu">
        <Link to="/table" ><li className="menu-item">Products</li></Link> 
        <Link to="/pagination" ><li className="menu-item">Consignment</li></Link>
        <Link to="/cardSlider" > <li className="menu-item">Appointment</li></Link> 
        <Link to="/pieChart" > <li className="menu-item">PieChart</li></Link> 
        {/* <li className="menu-item">Products</li>
        <li className="menu-item">Consignment</li>
        <li className="menu-item">Appointment</li> */}
      </ul>
    </div>
  );
};

export default Sidebar;