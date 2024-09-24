// src/TrackDrug.js

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import Footer from '../../Components/Footer';
import ManuNavbar from './ManuNavbar';

const TrackDrug = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [drugName, setDrugName] = useState('');
  const [status, setStatus] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [notes, setNotes] = useState('');
  const [statusOption, setStatusOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate tracking logic here
    setStatus(`Tracking info for ${drugName} (Tracking No: ${trackingNumber}) has been retrieved.`);
  };

  return (
    <main>
      <ManuNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Track Drug
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tracking Number"
                variant="outlined"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Drug Name"
                variant="outlined"
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusOption}
                  onChange={(e) => setStatusOption(e.target.value)}
                  label="Status"
                  required
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Shipped">Shipped</MenuItem>
                  <MenuItem value="Delivered">Delivered</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Expected Delivery Date"
                variant="outlined"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                variant="outlined"
                multiline
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Track
              </Button>
            </Grid>
          </Grid>
        </form>
        {status && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            {status}
          </Typography>
        )}
      </Paper>
    </Container>
    <Footer />

    </main>
    
  );
};

export default TrackDrug;
