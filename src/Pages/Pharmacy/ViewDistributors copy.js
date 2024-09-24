// src/components/ViewDistributors.js
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const sampleDistributors = [
  { id: 1, name: 'Health Distributors Ltd.', location: 'New York, USA', contact: 'info@healthdist.com' },
  { id: 2, name: 'Pharma Supply Co.', location: 'London, UK', contact: 'contact@pharmasupply.co.uk' },
  { id: 3, name: 'Global Med Supplies', location: 'Berlin, Germany', contact: 'support@globalmed.de' },
  { id: 4, name: 'MediCare Distribution', location: 'Paris, France', contact: 'help@medicare.fr' },
  { id: 5, name: 'Wellness Distributors', location: 'Sydney, Australia', contact: 'contact@wellnessdist.com.au' },
];

const ViewDistributors = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        View Distributors
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
            {sampleDistributors.map((distributor) => (
              <TableRow key={distributor.id}>
                <TableCell>{distributor.id}</TableCell>
                <TableCell>{distributor.name}</TableCell>
                <TableCell>{distributor.location}</TableCell>
                <TableCell>{distributor.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewDistributors;
