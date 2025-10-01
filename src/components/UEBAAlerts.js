import React, { useState, useEffect } from 'react';

// Simulated UEBA alerts data
const initialUEBAAlerts = [
  { id: 1, message: 'Abnormal data request detected', timestamp: new Date().toLocaleString() }
];

const UEBAAlerts = () => {
  const [alerts, setAlerts] = useState(initialUEBAAlerts);

  // Simulate dynamic alerts every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random alert generation
      if (Math.random() < 0.3) {
        const newAlert = {
          id: alerts.length + 1,
          message: Math.random() < 0.5 ? 'Multiple rapid bookings detected' : 'Unusual agent behavior noted',
          timestamp: new Date().toLocaleString()
        };
        setAlerts(prevAlerts => [newAlert, ...prevAlerts]);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ueba-alerts">
      <h2>UEBA Alerts</h2>
      {alerts.map(alert => (
        <div key={alert.id} className="alert-box">
          <p><strong>Alert:</strong> {alert.message}</p>
          <p><small>{alert.timestamp}</small></p>
        </div>
      ))}
    </div>
  );
};

export default UEBAAlerts;
