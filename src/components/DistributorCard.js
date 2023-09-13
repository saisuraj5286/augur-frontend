import React from 'react';
import PropTypes from 'prop-types';
import './dis.css'; // Update the CSS import path

function DistributorCard({ distributor, className }) {
  // Destructure the distributor data
  const { name, shippedLastMonth, forecastedShipment, ytdAvg } = distributor;

  return (
    <div className={`distributor-card ${className}`}>
      <h2>{name}</h2>
      <p>Last Month: {shippedLastMonth} units</p>
      <p>Forecast: {forecastedShipment} units</p>
      <p>YTD Avg: {ytdAvg} units</p>
    </div>
  );
}

DistributorCard.propTypes = {
  distributor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shippedLastMonth: PropTypes.number.isRequired,
    forecastedShipment: PropTypes.number.isRequired,
    ytdAvg: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string, // Optional additional class name for styling
};

export default DistributorCard;
