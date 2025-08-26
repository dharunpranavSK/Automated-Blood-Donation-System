import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Blood Donation</h2>
      <ul>
        <li><Link to="/landing">Dashboard</Link></li>
        <li><Link to="/blood-request">Blood Request</Link></li>
        <li><Link to="/donor-registration">Donor Registration</Link></li>
        <li><Link to="/details-renewal">Details Renewal</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
