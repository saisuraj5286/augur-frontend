// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DistributorCard from './components/DistributorCard';
import mockData from './data/mockData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Distributor Dashboard</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<div className="distributor-list">
              {mockData.map((distributor, index) => (
                <DistributorCard key={index} distributor={distributor} />
              ))}
             
              <DistributorCard distributor={{ name: "Distributor 3", shippedLastMonth: 110, forecastedShipment: 120, ytdAvg: 105 }} className="green" />
              
              <DistributorCard distributor={{ name: "Distributor 4", shippedLastMonth: 120, forecastedShipment: 140, ytdAvg: 110 }} className="blue" />
              <DistributorCard distributor={{ name: "Distributor 5", shippedLastMonth: 90, forecastedShipment: 100, ytdAvg: 95 }} className="purple" />
              <DistributorCard distributor={{ name: "Distributor 6", shippedLastMonth: 75, forecastedShipment: 80, ytdAvg: 70 }} className="pink" />
            </div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
