import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';


const ForgetPassword = () => {
  const router = useRouter();
  const [emailid, setEmailid] = useState('');
  const [OTP, setOTP] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailid }),
      });   
      const data = await response.json();
      if (response.ok) {
        console.log('OTP sent successfully:', data.message);
        // Handle success (if needed)
      } else {
        console.error('Error sending OTP:', data.error);
        // Handle error (if needed)
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (if needed)
    }
  };

  const handleLogin = () => {
    if (OTP) {
      console.log('Login successful!');
      router.push('/welcome');
    } else {
      console.log('Login failed: Please provide both username and password.');
      alert('Please provide both username and password.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '5rem', textAlign: 'center' }}>
      <Box>
        <Typography>Get Started!</Typography>
      </Box>
      <Box pt={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form>
          <Box pb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Emailid"
              id="emailid"
              name="emailid"
              required
              value={emailid}
              onChange={(e) => setEmailid(e.target.value)}
            />
          </Box>
          <Box pb={2} sx={{ alignSelf: 'flex-end' }}>
            <Button variant="contained" sx={{color: 'white', backgroundColor:'#558b2f'}} onClick={handleSendOTP}>
              SendOTP
            </Button>
          </Box>
          <Box pb={2}>
            <TextField fullWidth variant="outlined" label="OTP" id="OTP" name="OTP" required value={OTP} onChange={(e) => setOTP(e.target.value)} />
          </Box>
          <Box pb={4}>
            <Button variant="contained" onClick={handleLogin} disabled={!OTP}>
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ForgetPassword;
