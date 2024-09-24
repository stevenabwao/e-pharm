import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

import ManuNavbar from './ManuNavbar';
import Footer from '../../Components/Footer';
const AddDrug = () => {
  const [drugData, setDrugData] = useState({
    name: '',
    dosage: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDrugData({ ...drugData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drug added:', drugData);
    // Here, you can handle the API call to save the drug data
  };

  return (
    <main>
      <ManuNavbar />
      <Container component="main" maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Add Drug
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Drug Name"
              name="name"
              value={drugData.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Dosage"
              name="dosage"
              value={drugData.dosage}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={drugData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={drugData.price}
              onChange={handleChange}
              required
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Add Drug
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
  

    </main>
    
  );
};

export default AddDrug;
