import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <h2>Welcome to your Dashboard!</h2>
        <p>This is your personalized dashboard. Customize it as needed.</p>
        <div className="dashboard-actions">
          <Link to="/profile" className="btn">Go to Profile</Link>
          <Link to="/settings" className="btn">Go to Settings</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
