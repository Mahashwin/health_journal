import React, { useState } from 'react';
import Layout from '../components/Layout';
import './Settings.css';

const Settings = () => {
  const [formData, setFormData] = useState({
    email: 'madhu@gmail.com',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage('Settings updated successfully!');
      
    }
  };

  return (
    <Layout>
      <div className="settings-container">
        <h2>Update Settings</h2>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
          <button type="submit">Update Settings</button>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
