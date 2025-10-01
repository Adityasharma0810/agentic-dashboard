import React, { useState } from 'react';

// Simulated backend data for service appointments and available slots
const initialAppointments = [
  { id: 1, vehicle: 'Vehicle A', date: '2023-12-01', time: '10:00 AM' },
  { id: 2, vehicle: 'Vehicle B', date: '2023-12-03', time: '02:00 PM' }
];

const availableSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'
];

const ServiceScheduling = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleBookService = () => {
    if (selectedVehicle && selectedDate && selectedTime) {
      // Simulated Backend / AI agent calls: This would send booking to backend
      const newAppointment = {
        id: appointments.length + 1,
        vehicle: selectedVehicle,
        date: selectedDate,
        time: selectedTime
      };
      setAppointments([...appointments, newAppointment]);
      setConfirmation(`Service booked for ${selectedVehicle} on ${selectedDate} at ${selectedTime}`);
      setSelectedVehicle('');
      setSelectedDate('');
      setSelectedTime('');
    }
  };

  return (
    <div className="service-scheduling">
      <h2>Service Scheduling</h2>
      <h3>Upcoming Appointments</h3>
      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.vehicle}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Book New Service</h3>
      <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
        <option value="">Select Vehicle</option>
        <option value="Vehicle A">Vehicle A</option>
        <option value="Vehicle B">Vehicle B</option>
        <option value="Vehicle C">Vehicle C</option>
      </select>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="">Select Time</option>
        {availableSlots.map(slot => (
          <option key={slot} value={slot}>{slot}</option>
        ))}
      </select>
      <button onClick={handleBookService}>Book Service</button>
      {confirmation && <p className="confirmation">{confirmation}</p>}
    </div>
  );
};

export default ServiceScheduling;
