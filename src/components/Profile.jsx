import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: 'MADHUVANTHI',
    email: 'madhu@gmail.com',
    createdAt: '2025-01-15'
  });

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <div className="profile-container">
        <h2>Your Profile</h2>
        <div className="profile-info">
          <p><strong>Full Name:</strong> {userData.fullName}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Joined On:</strong> {userData.createdAt}</p>
        </div>
        <div className="profile-actions">
          <Link to="/settings" className="btn">Go to Settings</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
