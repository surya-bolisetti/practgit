 
// pages/login.js
import React from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Simulating a login action
    // You can add your authentication logic here
    // For now, let's navigate to the welcome page
    router.push('/welcome');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
