import React, { useState, useEffect } from 'react';

// Simulated Backend / AI agent calls: This function would fetch real vehicle data from backend
const fetchVehicleData = () => {
  // Dummy data for 3 vehicles
  return [
    {
      id: 1,
      name: 'Vehicle A',
      engineTemp: 85,
      battery: 75,
      vibration: 5,
      mileage: 45000,
      lastService: '2023-10-01'
    },
    {
      id: 2,
      name: 'Vehicle B',
      engineTemp: 105, // Abnormal
      battery: 45, // Abnormal
      vibration: 12, // Abnormal
      mileage: 32000,
      lastService: '2023-09-15'
    },
    {
      id: 3,
      name: 'Vehicle C',
      engineTemp: 90,
      battery: 80,
      vibration: 3,
      mileage: 55000,
      lastService: '2023-11-01'
    }
  ];
};

const VehicleMonitoring = () => {
  const [vehicles, setVehicles] = useState(fetchVehicleData());

  // Simulate real-time updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(vehicle => ({
          ...vehicle,
          engineTemp: vehicle.engineTemp + Math.random() * 10 - 5, // Simulate temp fluctuation
          battery: Math.max(0, vehicle.battery + Math.random() * 5 - 2.5), // Simulate battery change
          vibration: vehicle.vibration + Math.random() * 2 - 1, // Simulate vibration change
          mileage: vehicle.mileage + Math.random() * 10 // Simulate mileage increase
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleBookService = (vehicleId) => {
    // Simulated Backend / AI agent calls: This would send a booking request to backend
    alert(`Service booked for Vehicle ${vehicleId}`);
  };

  const isAbnormal = (vehicle) => {
    return vehicle.engineTemp > 100 || vehicle.vibration > 10 || vehicle.battery < 50;
  };

  return (
    <div className="vehicle-monitoring">
      <h2>Vehicle Monitoring</h2>
      <div className="vehicle-cards">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className={`vehicle-card ${isAbnormal(vehicle) ? 'abnormal' : ''}`}>
            <h3>{vehicle.name}</h3>
            <p>Engine Temp: {vehicle.engineTemp.toFixed(1)}°C</p>
            <p>Battery: {vehicle.battery.toFixed(1)}%</p>
            <p>Vibration: {vehicle.vibration.toFixed(1)}</p>
            <p>Mileage: {vehicle.mileage.toFixed(0)} km</p>
            <p>Last Service: {vehicle.lastService}</p>
            <button onClick={() => handleBookService(vehicle.id)}>Book Service</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleMonitoring;
