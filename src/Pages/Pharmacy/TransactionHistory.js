// src/TransactionHistory.js

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



const sampleTransactions = [
  { id: 1, date: '2024-09-01', drugName: 'Aspirin', quantity: 100, totalPrice: 200, status: 'Completed', customerName: 'John Doe', customerType: 'Patient' },
  { id: 2, date: '2024-09-02', drugName: 'Ibuprofen', quantity: 50, totalPrice: 150, status: 'Pending', customerName: 'ABC Pharmacy', customerType: 'Pharmacy' },
  { id: 3, date: '2024-09-03', drugName: 'Paracetamol', quantity: 200, totalPrice: 400, status: 'Completed', customerName: 'XYZ Distributors', customerType: 'Distributor' },
  { id: 4, date: '2024-09-04', drugName: 'Amoxicillin', quantity: 150, totalPrice: 300, status: 'Cancelled', customerName: 'Jane Smith', customerType: 'Patient' },
  { id: 5, date: '2024-09-05', drugName: 'Metformin', quantity: 80, totalPrice: 160, status: 'Completed', customerName: 'Health Mart', customerType: 'Pharmacy' },
  { id: 6, date: '2024-09-06', drugName: 'Simvastatin', quantity: 120, totalPrice: 240, status: 'Pending', customerName: 'John Doe', customerType: 'Patient' },
  { id: 7, date: '2024-09-07', drugName: 'Omeprazole', quantity: 75, totalPrice: 150, status: 'Completed', customerName: 'XYZ Distributors', customerType: 'Distributor' },
  { id: 8, date: '2024-09-08', drugName: 'Lisinopril', quantity: 90, totalPrice: 180, status: 'Completed', customerName: 'ABC Pharmacy', customerType: 'Pharmacy' },
  { id: 9, date: '2024-09-09', drugName: 'Levothyroxine', quantity: 60, totalPrice: 120, status: 'Pending', customerName: 'Jane Smith', customerType: 'Patient' },
  { id: 10, date: '2024-09-10', drugName: 'Metoprolol', quantity: 30, totalPrice: 60, status: 'Completed', customerName: 'Health Mart', customerType: 'Pharmacy' },
];

const TransactionHistory = () => {
  return (
    <div>

<Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Drug Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Customer Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.drugName}</TableCell>
                <TableCell>{transaction.quantity}</TableCell>
                <TableCell>${transaction.totalPrice}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.customerName}</TableCell>
                <TableCell>{transaction.customerType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    
    </div>
  );
};

export default TransactionHistory;
