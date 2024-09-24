import { Link, Outlet } from "react-router-dom";
import React from 'react';

const Header = () => {
  return (
    <header>
       
     <div class="cont">
        <div class="container">
            <h1>Medical Drugs Tracking</h1>
            
            <p>Supply Chain Management System</p>
        </div>
   
    <div class="navbar">
      <nav>
          <ul>
            <li>
              <Link to="/">Drug Overview</Link>
            </li>
            <li>
              <Link to="manufactureLogin">Manufacturer</Link>
            </li>
            <li>
              <Link to="contact">Pharmarcy</Link>
            </li>
            <li>
              <Link to="adddrug">Distributer</Link>
            </li>
            <li>
              <Link to="adddrug">Patient</Link>
            </li>
          </ul>
      </nav>
       
    </div>
</div>
    </header>
  );
};

export default Header

