
import React, { useState } from 'react';
import Layout from '../components/Layout';
import './SymptomTracker.css';

const SymptomTracker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    symptom: '',
    severity: 'mild',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSymptoms([...symptoms, { ...formData, id: Date.now() }]);
    setFormData({
      ...formData,
      symptom: '',
      description: ''
    });
  };

  return (
    <Layout>
      <div className="symptom-container">
        <div className="form-section">
          <h2>Track Your Symptoms</h2>
          <form onSubmit={handleSubmit} className="symptom-form">
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label>Symptom:</label>
              <input
                type="text"
                placeholder="Enter symptom"
                value={formData.symptom}
                onChange={(e) => setFormData({ ...formData, symptom: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label>Severity:</label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
              >
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Description:</label>
              <textarea
                placeholder="Describe your symptom"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
              />
            </div>
            
            <button type="submit">Add Symptom</button>
          </form>
        </div>

        <div className="symptoms-list">
          <h3>Recent Symptoms</h3>
          <div className="symptoms-grid">
            {symptoms.map((symptom) => (
              <div key={symptom.id} className="symptom-card">
                <div className="symptom-header">
                  <span className="symptom-date">{symptom.date}</span>
                  <span className={`severity-badge ${symptom.severity}`}>
                    {symptom.severity}
                  </span>
                </div>
                <h4>{symptom.symptom}</h4>
                <p>{symptom.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SymptomTracker;

