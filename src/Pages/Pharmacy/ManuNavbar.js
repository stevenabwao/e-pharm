import { Link, Outlet, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faClipboardList, faSearch, faHistory, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ManuNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user state, redirecting)
    console.log('User logged out');
    // Redirect to login page or handle accordingly
    navigate('/');
  };

  return (
    <>
      <header className="Manunavbar">
        <nav>
          <ul>
            <li>
              <Link to="/manuviewdrugs">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/adddrug">
                <FontAwesomeIcon icon={faPlus} /> Add Drug
              </Link>
            </li>
            <li>
              <Link to="/view-orders">
                <FontAwesomeIcon icon={faClipboardList} /> View Orders
              </Link>
            </li>
            <li>
              <Link to="/track-drug">
                <FontAwesomeIcon icon={faSearch} /> Track Drugs
              </Link>
            </li>
            <li>
              <Link to="/transaction-history">
                <FontAwesomeIcon icon={faHistory} /> Transaction History
              </Link>
            </li>
          </ul>
          <div className="user-icon" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} />
            {dropdownOpen && (
              <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
