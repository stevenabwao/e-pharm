import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./index.css";



// import Footer from './components/Footer';


import Header from "./Components/Navbar";
import Login from './Pages/Manufacturer/login'
import PharmLogin from './Pages/Pharmacy/login'
import DrugOverview from "./Pages/Home";
import DistriburionLogin from "./Pages/Distributor/login";
import ManuDrugOverview from "./Pages/Manufacturer/Home";
import TrackDrug from './Pages/Manufacturer/TrackDrug'
import AddDrug from "./Pages/Manufacturer/addDrug";
import ViewOrders from "./Pages/Manufacturer/ViewOrders";
import TransactionHistory from "./Pages/Manufacturer/TransactionHistory";
import ForgotPassword from "./Pages/Manufacturer/ForgotPassword";
import PatientLogin from "./Pages/Patient/login";
import ManuRegister from "./Pages/Patient/Register";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<DrugOverview />} />
        <Route path="manufactureLogin" element={<Login />} />
        <Route path="phamacyLogin" element={<PharmLogin />} />
        <Route path="distLogin" element={<DistriburionLogin />} />
        <Route path="manuviewdrugs" element={<ManuDrugOverview/>} />
        <Route path="adddrug" element={<AddDrug/>} />
        <Route path="track-drug" element={<TrackDrug/>} />
        <Route path="view-orders" element={<ViewOrders/>} />
        <Route path="transaction-history" element={<TransactionHistory/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="patientLogin" element={<PatientLogin/>} />
        <Route path="register" element={<ManuRegister/>} />
        
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
