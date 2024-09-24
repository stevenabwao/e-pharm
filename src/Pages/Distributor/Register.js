// src/Register.js
import React from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registration submitted');
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '100px' }}>
            <Paper elevation={6} style={{ padding: '30px', borderRadius: '15px' }}>
                <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
                    Register
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
                        autoComplete="new-password"
                        style={{ marginBottom: '20px' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                        style={{ marginBottom: '20px' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ padding: '10px', borderRadius: '5px' }}
                    >
                        Register
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;
