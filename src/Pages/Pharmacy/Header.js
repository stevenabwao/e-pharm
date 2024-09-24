import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className="cont">
        <div className="container">
          <h1>Medical Drugs Tracking</h1>
          <p>Supply Chain Management System</p>
        </div>

        {/* Navigation bar */}
        <div className="navbar">
          <a href="/add-drug">Add Drug</a>
          <a href="/view-orders">View Orders</a>
          <a href="/track-drug">Track Drugs</a>
          <a href="/transaction-history">Transaction History</a>

          {/* User profile icon */}
          <div className="profile" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
