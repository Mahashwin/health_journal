import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SymptomTracker from "./components/SymptomTracker";
import PatientDetails from "./components/PatientDetails";
import Layout from "./components/Layout";
import './App.css';
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/symptom-tracker" element={<SymptomTracker />} />
          <Route path="/patient-details" element={<PatientDetails />} />
          <Route path="*" element={
            <div className="not-found">
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
            </div>
          } />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/settings" element={<Settings/>}/>
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
