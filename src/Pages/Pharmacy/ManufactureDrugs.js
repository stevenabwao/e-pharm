import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import Footer from '../Manufacturer/Footer'
import Header from '../Manufacturer/Header'
import ManuNavbar from './ManuNavbar';
const ViewmanufacturerDrugs = [
  { 
    id: 5, 
    name: 'Aspirin', 
    price: '$10', 
    description: 'Aspirin is used to reduce fever, pain, and inflammation.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Relieves pain and reduces inflammation.', 
    manufacturer: 'Bayer' 
  },
  { 
    id: 6, 
    name: 'Metformin', 
    price: '$12', 
    description: 'Metformin is used to control high blood sugar in people with type 2 diabetes.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Helps control blood sugar levels.', 
    manufacturer: 'Teva Pharmaceuticals' 
  },
  { 
    id: 7, 
    name: 'Amoxicillin', 
    price: '$8', 
    description: 'Amoxicillin is an antibiotic used to treat a wide variety of bacterial infections.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Treats bacterial infections.', 
    manufacturer: 'GlaxoSmithKline' 
  },
  { 
    id: 8, 
    name: 'Ciprofloxacin', 
    price: '$15', 
    description: 'Ciprofloxacin is an antibiotic used to treat various bacterial infections.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Used to treat respiratory, urinary tract, and abdominal infections.', 
    manufacturer: 'Bayer' 
  },
  { 
    id: 9, 
    name: 'Ibuprofen', 
    price: '$7', 
    description: 'Ibuprofen is used to reduce fever and treat pain or inflammation.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Relieves pain and reduces fever.', 
    manufacturer: 'Johnson & Johnson' 
  },
  { 
    id: 10, 
    name: 'Paracetamol', 
    price: '$6', 
    description: 'Paracetamol is a common pain reliever and fever reducer.', 
    imageUrl: 'https://via.placeholder.com/150', 
    usage: 'Reduces pain and fever.', 
    manufacturer: 'Pfizer' 
  },
];

const ManufacturerDrugs = () => {
  return (
    <div className="App">
      <Header />
      <ManuNavbar />
       <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Manufacturer Drugs
      </Typography>
      <Grid container spacing={3}>
        {manufacturerDrugs.map(drug => (
          <Grid item xs={12} sm={6} md={4} key={drug.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={drug.imageUrl}
                alt={drug.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {drug.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {drug.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  <strong>Usage:</strong> {drug.usage}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <strong>Manufacturer:</strong> {drug.manufacturer}
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="primary" sx={{ mt: 1 }}>
                  {drug.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Edit Drug
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
     
      <Footer />
      
  
    </div>
    
  );
};

export default ViewmanufacturerDrugs;
