import { Box, Button, Checkbox, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      console.log('Login successful!');
      router.push('/welcome');
    } else {
      console.log('Login failed: Please provide both username and password.');
      alert('Please provide both username and password.');
    }
  };
  const handleforgetpassword=()=>{
    router.push('/forgetpassword');
  }
  return (
    <Container maxWidth="sm" sx={{ marginTop: '5rem', textAlign: 'center' }}>
       <Box>
          <Typography>Get Started!</Typography>
        </Box>
      <Box pt={2}>
        <form>
          <Box pb={2}>
            <TextField fullWidth variant="outlined" sx={{Color: '#558b2f'}} label="Username" id="username" name="username" required value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          </Box>
          <Box pb={2}>
            <TextField fullWidth variant="outlined" sx={{color: '#558b2f'}} label="Password" type="password"  id="password" name="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </Box>
          <Box pb={5}>
            <Checkbox /> I accept the terms of service and privacy policy
          </Box>
          <Box pb={2}>
          <Button variant="outlined" onClick={handleforgetpassword} sx={{color: '#558b2f'}}>
          Forgetpassword?
          </Button>
          </Box>
          <Box pb={4}>
            <Button variant="contained" onClick={handleLogin} disabled={!username || !password}>
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
