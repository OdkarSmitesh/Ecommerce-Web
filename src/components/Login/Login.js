import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onViewChange }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { username, password };
    onLogin(loginInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      
      <button type="button" onClick={() => onViewChange('register')}>Register</button>
      
    </form>
  );
}

export default Login;
