import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-wrapper">
        <main className="dashboard-container">
          <div className="dashboard-content">
            <div className="welcome-header">
              Welcome to Dashboard
            </div>
            <p>This is your personalized dashboard. Customize it as needed.</p>
            <div className="dashboard-actions">
              <Link to="/profile" className="dashboard-btn">Go to Profile</Link>
              <Link to="/settings" className="dashboard-btn">Go to Settings</Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Dashboard;