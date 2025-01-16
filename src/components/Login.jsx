import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Layout from '../components/Layout';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage('All fields are required');
      return;
    }

    console.log('Login data submitted:', formData);

    setErrorMessage('');
    setSuccessMessage('Successfully logged in!'); 

    setTimeout(() => {
      navigate('/dashboard'); 
    }, 1500); 
  };

  return (
    <Layout>
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>} 
          
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-label="Email"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            aria-label="Password"
          />
          <button type="submit">Log In</button>
          <p className="switch-auth-container">
            Don't have an account?{' '}
            <Link to="/signup" className="switch-auth">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
