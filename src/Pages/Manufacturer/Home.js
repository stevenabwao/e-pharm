import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faSyringe, faTablets } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer';
import ManuNavbar from './ManuNavbar';


// Sample data categorized
const categories = {
  Pharmacy: [
    { id: 1, name: 'Paracetamol', price: '$5', description: 'Pain reliever and fever reducer' },
    { id: 2, name: 'Ibuprofen', price: '$7', description: 'Anti-inflammatory drug' },
    { id: 3, name: 'Aspirin', price: '$10', description: 'Blood thinner' },
    { id: 4, name: 'Amoxicillin', price: '$15', description: 'Antibiotic for bacterial infections' },
    { id: 5, name: 'Ciprofloxacin', price: '$12', description: 'Antibiotic for infections' },
    { id: 6, name: 'Metformin', price: '$8', description: 'Diabetes medication' }
  ],
  Distributor: [
    { id: 7, name: 'Doxycycline', price: '$20', description: 'Antibiotic for severe infections' },
    { id: 8, name: 'Warfarin', price: '$25', description: 'Anticoagulant to prevent blood clots' },
    { id: 9, name: 'Insulin', price: '$30', description: 'Hormone for diabetes management' },
    { id: 10, name: 'Prednisone', price: '$18', description: 'Steroid for inflammation' },
    { id: 11, name: 'Azithromycin', price: '$22', description: 'Antibiotic for infections' },
    { id: 12, name: 'Clindamycin', price: '$15', description: 'Antibiotic for skin infections' }
  ],
  Manufacturer: [
    { id: 13, name: 'Levothyroxine', price: '$25', description: 'Thyroid hormone replacement' },
    { id: 14, name: 'Simvastatin', price: '$27', description: 'Cholesterol-lowering drug' },
    { id: 15, name: 'Atorvastatin', price: '$29', description: 'Lowers cholesterol' },
    { id: 16, name: 'Omeprazole', price: '$10', description: 'Acid reducer' },
    { id: 17, name: 'Lisinopril', price: '$8', description: 'Blood pressure medication' },
    { id: 18, name: 'Losartan', price: '$12', description: 'Treats high blood pressure' }
  ]
};

const ManuDrugOverview = () => {
  return (
   
   <main>
    <ManuNavbar />
     <div className="Main">
      
      <h1 className="title">Drug Overview</h1>

      {/* Render each category */}
      {Object.keys(categories).map((category) => (
        <div key={category} className="drug-category">
          <h2 className="category-title">
            {category}
            <FontAwesomeIcon icon={category === 'Pharmacy' ? faCapsules : category === 'Distributor' ? faSyringe : faTablets} className="category-icon" />
          </h2>

          <div className="grid-container">
            {categories[category].map((drug) => (
              <div className="drug-card" key={drug.id}>
                <h3 className="drug-name">{drug.name}</h3>
                <p className="drug-description">{drug.description}</p>
                <p className="drug-price">{drug.price}</p>
                <button className="add-to-cart">Edit Drug</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
     
     <Footer />
  

   </main>
  );
};

export default ManuDrugOverview ;
