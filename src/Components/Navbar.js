import { Link, Outlet } from "react-router-dom";


export default function Navbar() {
  return (
    <>
       <div class="cont">
        <div class="container">
            <h1>Medical Drugs Tracking</h1>
            
            <p>Supply Chain Management System</p>
        </div>
        </div>
      <header className="navbar">
   
        <nav>
        <ul>
            <li>
              <Link to="/">Drug Overview</Link>
            </li>
            <li>
              <Link to="manufactureLogin">Manufacturer</Link>
            </li>
            <li>
              <Link to="phamacyLogin">Pharmarcy</Link>
            </li>
            <li>
              <Link to="distLogin">Distributer</Link>
            </li>
            <li>
              <Link to="patientLogin">Patient</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
