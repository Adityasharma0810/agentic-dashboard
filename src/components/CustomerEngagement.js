import React, { useState, useEffect } from 'react';

// Simulated messages data
const initialMessages = [
  { id: 1, vehicle: 'Vehicle A', message: 'Your vehicle engine temperature is rising. Please schedule service.', timestamp: new Date().toLocaleString() },
  { id: 2, vehicle: 'Vehicle B', message: 'Battery replacement recommended. Contact us for details.', timestamp: new Date().toLocaleString() }
];

const CustomerEngagement = () => {
  const [messages, setMessages] = useState(initialMessages);

  // Simulate new messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.4) {
        const newMessage = {
          id: messages.length + 1,
          vehicle: 'Vehicle C',
          message: 'Vibration detected. Predictive maintenance alert.',
          timestamp: new Date().toLocaleString()
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  const speakMessage = (message) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in this browser.');
    }
  };

  return (
    <div className="customer-engagement">
      <h2>Customer Engagement</h2>
      <div className="chat-container">
        {messages.map(msg => (
          <div key={msg.id} className="message">
            <p><strong>{msg.vehicle}:</strong> {msg.message}</p>
            <small>{msg.timestamp}</small>
            <button onClick={() => speakMessage(msg.message)}>Speak</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerEngagement;
