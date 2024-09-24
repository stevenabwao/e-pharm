// src/ForgotPassword.js
import React from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';

const ForgotPassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle password reset
        console.log('Password reset submitted');
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '100px' }}>
            <Paper elevation={6} style={{ padding: '30px', borderRadius: '15px' }}>
                <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
                    Forgot Password
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ padding: '10px', borderRadius: '5px' }}
                    >
                        Reset Password
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default ForgotPassword;
