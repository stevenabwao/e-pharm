import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset (API call, etc.)
    console.log('Password reset submitted');
    // Open the dialog popup to inform the user
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false); // Close the popup when the user acknowledges
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Reset Password
        </Button>
      </form>

      {/* Password Reset Popup Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Password Reset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A password reset link has been sent to your email. Please check your inbox to reset your password.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ForgotPassword;
