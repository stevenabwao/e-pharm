// src/components/ViewManufacturers.js
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const sampleManufacturers = [
  { id: 1, name: 'Global Pharma Ltd.', location: 'California, USA', contact: 'contact@globalpharma.com' },
  { id: 2, name: 'BioHealth Corp.', location: 'Toronto, Canada', contact: 'support@biohealth.ca' },
  { id: 3, name: 'EuroMed Laboratories', location: 'Amsterdam, Netherlands', contact: 'info@euromed.nl' },
  { id: 4, name: 'Asia Pharma Solutions', location: 'Tokyo, Japan', contact: 'sales@asiapharma.jp' },
  { id: 5, name: 'Africa Medtech Industries', location: 'Johannesburg, South Africa', contact: 'contact@africamedtech.co.za' },
];

const ViewManufacturers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        View Manufacturers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Contact</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleManufacturers.map((manufacturer) => (
              <TableRow key={manufacturer.id}>
                <TableCell>{manufacturer.id}</TableCell>
                <TableCell>{manufacturer.name}</TableCell>
                <TableCell>{manufacturer.location}</TableCell>
                <TableCell>{manufacturer.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewManufacturers;
