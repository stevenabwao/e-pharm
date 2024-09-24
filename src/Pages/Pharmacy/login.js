// src/Login.js
import React from 'react';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import Footer from '../../Components/Footer';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login submitted');
    };

    return (
        <main>
             <Container component="main" maxWidth="xs" style={{ marginTop: '100px' }}>
            <Paper elevation={6} style={{ padding: '30px', borderRadius: '15px' }}>
                <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        style={{ marginBottom: '20px' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{ marginBottom: '20px' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ padding: '10px', borderRadius: '5px', marginBottom: '10px' }}
                    >
                        Login
                    </Button>
                </form>
                <Typography align="center">
                    <Link href="#" variant="body2" style={{ marginRight: '10px' }}>
                        Forgot Password?
                    </Link>
                    <Link href="/register" variant="body2">
                        Don't have an account? Register
                    </Link>
                </Typography>
            </Paper>
        </Container>
        <Footer />

        </main>
       
    );
};

export default Login;
