import React, { useState } from 'react';
import './Register.css';

function Register({ onRegister, onViewChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { username, password };
    onRegister(userInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register</h2>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      
      <button type="button" onClick={() => onViewChange('login')}>Back to Login</button>
      
    </form>
  );
}

export default Register;
