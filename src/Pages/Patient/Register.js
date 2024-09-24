import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

const ManuRegister = () => {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Registration
  const handleRegister = () => {
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate successful registration (you would normally call an API here)
    alert('Registration successful! You can now log in.');
    navigate('/login'); // Redirect to login page after registration
  };

  return (
    <main>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            padding: 4,  // Adds padding inside the box
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',  // White background for the form
            borderRadius: 2,  // Adds rounded corners
            boxShadow: 3, 
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && (
              <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
              <Link href="manufactureLogin" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>

      <section className="footer-section">
        <Footer />
      </section>
    </main>
  );
};

export default ManuRegister;
