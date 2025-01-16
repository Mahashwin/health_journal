import React, { useState } from 'react';
import Layout from './Layout';
import './PatientDetails.css';

const PatientDetails = () => {
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    height: '',
    weight: '',
    phoneNumber: '',
    address: '',
    emergencyContact: '',
    medicalHistory: '',
    allergies: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
    <div className="patient-container">
      

      
      
      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={patientData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={patientData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={patientData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={patientData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label>Blood Group:</label>
            <select
              name="bloodGroup"
              value={patientData.bloodGroup}
              onChange={handleChange}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={patientData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group">
            <label>Height (cm):</label>
            <input
              type="number"
              name="height"
              value={patientData.height}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={patientData.weight}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group full-width">
            <label>Address:</label>
            <textarea
              name="address"
              value={patientData.address}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group full-width">
            <label>Emergency Contact:</label>
            <input
              type="text"
              name="emergencyContact"
              value={patientData.emergencyContact}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group full-width">
            <label>Medical History:</label>
            <textarea
              name="medicalHistory"
              value={patientData.medicalHistory}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <div className="form">
          <div className="form-group full-width">
            <label>Allergies:</label>
            <textarea
              name="allergies"
              value={patientData.allergies}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <button type="submit">Save Patient Information</button>
      </form>
    </div>
    </Layout>
  );
};

export default PatientDetails;