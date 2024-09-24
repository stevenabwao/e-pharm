// src/ViewOrders.js

import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Footer from '../../Components/Footer';
import ManuNavbar from './ManuNavbar';

const sampleOrders = [
  { id: 1, product: 'Aspirin', quantity: 100, price: 200, status: 'Shipped' },
  { id: 2, product: 'Ibuprofen', quantity: 50, price: 150, status: 'Pending' },
  { id: 3, product: 'Paracetamol', quantity: 200, price: 400, status: 'Delivered' },
  { id: 4, product: 'Amoxicillin', quantity: 150, price: 300, status: 'Cancelled' },
  { id: 5, product: 'Metformin', quantity: 80, price: 160, status: 'Shipped' },
  { id: 6, product: 'Simvastatin', quantity: 120, price: 240, status: 'Pending' },
  { id: 7, product: 'Omeprazole', quantity: 75, price: 150, status: 'Delivered' },
  { id: 8, product: 'Lisinopril', quantity: 90, price: 180, status: 'Shipped' },
  { id: 9, product: 'Levothyroxine', quantity: 60, price: 120, status: 'Pending' },
  { id: 10, product: 'Metoprolol', quantity: 30, price: 60, status: 'Delivered' },
];

const ViewOrders = () => {
  return (
    <main>
      <ManuNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        View Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow fontWeight="bold">
              <TableCell sx={{ fontWeight: 'bold' }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>${order.price}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    <Footer />

    </main>
    
  );
};

export default ViewOrders;
