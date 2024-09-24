import { Link, Outlet } from "react-router-dom";


export default function DistNavbar() {
  return (
    <>
  
      <header className="Manunavbar">
   
        <nav>
        <ul>
        
          <li>
              <Link to="manuviewdrugs">Home</Link>
            </li>
            <li>
              <Link to="/adddrug">Add Drug</Link>
            </li>
            <li>
              <Link to="view-orders">View Orders</Link>
            </li>
            <li>
              <Link to="track-drug">Track Drugs</Link>
            </li>
            <li>
              <Link to="transaction-history">Transaction History</Link>
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
