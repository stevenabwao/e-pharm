
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';
import DistNavbar from './DistNavbar';

const DistributionLogin =  ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Login
  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      setIsLoggedIn(true);  // Set login state to true
      navigate('/');        // Redirect to homepage after login
    } else {
      setError('Invalid email or password');
    }
  };

    return (
        <main>
          <DistNavbar />
      
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
          Login
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleLogin}
          >
            Login
          </Button>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
            <Link href="/register" variant="body2">
              {"Don't have an account? Register"}
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

export default DistributionLogin;
