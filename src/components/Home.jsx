import React from 'react';
import Layout from './Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home-content">
        <h1>Welcome to the Health Journal</h1>
        <p>Track your symptoms, manage personal details, and maintain your health journal.</p>
      </div>
    </Layout>
  );
};

export default Home;