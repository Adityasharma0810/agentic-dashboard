import React, { useState, useEffect } from 'react';

// Simulated backend call to fetch predictive alerts based on vehicle data
const fetchPredictiveAlerts = () => {
  return [
    { id: 1, vehicle: 'Vehicle A', issue: 'Engine overheating', priority: 'high' },
    { id: 2, vehicle: 'Vehicle B', issue: 'Battery low', priority: 'medium' },
    { id: 3, vehicle: 'Vehicle C', issue: 'Vibration anomaly', priority: 'low' }
  ];
};

const priorityColors = {
  high: '#ff4d4f', // red
  medium: '#faad14', // yellow
  low: '#52c41a' // green
};

const PredictiveAlerts = () => {
  const [alerts, setAlerts] = useState(fetchPredictiveAlerts());

  // Simulate real-time updates every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate alert updates by toggling priority randomly
      setAlerts(prevAlerts =>
        prevAlerts.map(alert => {
          const priorities = ['high', 'medium', 'low'];
          const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];
          return { ...alert, priority: randomPriority };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="predictive-alerts">
      <h2>Predictive Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li
            key={alert.id}
            style={{
              color: priorityColors[alert.priority],
              fontWeight: alert.priority === 'high' ? 'bold' : 'normal',
              marginBottom: '8px'
            }}
          >
            <strong>{alert.vehicle}:</strong> {alert.issue} ({alert.priority.toUpperCase()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PredictiveAlerts;
