// src/components/ForgotPassword.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './forgot.css'; // Create a separate CSS file for styling

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailParam = new URLSearchParams(location.search).get('email');
  const [email, setEmail] = useState(emailParam || '');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic (e.g., API calls)
    console.log('Email:', email, 'New Password:', newPassword);
    // After password reset, redirect to login
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
