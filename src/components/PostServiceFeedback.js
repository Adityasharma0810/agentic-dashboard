import React, { useState } from 'react';

// Simulated backend data for feedback
const initialFeedbacks = [
  { id: 1, vehicle: 'Vehicle A', feedback: 'Service completed successfully', date: '2023-11-15' },
  { id: 2, vehicle: 'Vehicle B', feedback: 'Parts replaced, customer satisfied', date: '2023-11-10' }
];

const PostServiceFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [newFeedback, setNewFeedback] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleSubmitFeedback = () => {
    if (newFeedback && selectedVehicle) {
      // Simulated Backend / AI agent calls: This would send feedback to backend
      const feedback = {
        id: feedbacks.length + 1,
        vehicle: selectedVehicle,
        feedback: newFeedback,
        date: new Date().toISOString().split('T')[0]
      };
      setFeedbacks([...feedbacks, feedback]);
      setNewFeedback('');
      setSelectedVehicle('');
    }
  };

  return (
    <div className="post-service-feedback">
      <h2>Post-Service Feedback</h2>
      <h3>Add Feedback</h3>
      <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
        <option value="">Select Vehicle</option>
        <option value="Vehicle A">Vehicle A</option>
        <option value="Vehicle B">Vehicle B</option>
        <option value="Vehicle C">Vehicle C</option>
      </select>
      <textarea
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        placeholder="Enter feedback..."
      />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
      <h3>Feedback History</h3>
      <ul>
        {feedbacks.map(fb => (
          <li key={fb.id}>
            <strong>{fb.vehicle} ({fb.date}):</strong> {fb.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostServiceFeedback;
