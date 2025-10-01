import React, { useState, useEffect } from 'react';

// Simulated summary data
const DashboardSummary = () => {
  const [summary, setSummary] = useState({
    totalVehicles: 3,
    activeAlerts: 2,
    upcomingServices: 2
  });

  // Simulate updates every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSummary(prev => ({
        ...prev,
        activeAlerts: Math.floor(Math.random() * 5),
        upcomingServices: Math.floor(Math.random() * 4)
      }));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-summary">
      <h2>Dashboard Summary</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total Vehicles Monitored</h3>
          <p>{summary.totalVehicles}</p>
        </div>
        <div className="card">
          <h3>Active Alerts</h3>
          <p>{summary.activeAlerts}</p>
        </div>
        <div className="card">
          <h3>Upcoming Services</h3>
          <p>{summary.upcomingServices}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
