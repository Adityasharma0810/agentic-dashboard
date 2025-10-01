import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import components
import VehicleMonitoring from './components/VehicleMonitoring';
import PredictiveAlerts from './components/PredictiveAlerts';
import ServiceScheduling from './components/ServiceScheduling';
import PostServiceFeedback from './components/PostServiceFeedback';
import RCACAPAInsights from './components/RCACAPAInsights';
import UEBAAlerts from './components/UEBAAlerts';
import CustomerEngagement from './components/CustomerEngagement';
import DashboardSummary from './components/DashboardSummary';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Agentic AI Automotive Dashboard</h1>
        </header>
        <div className="main-container">
          <nav className="sidebar">
            <ul>
              <li><Link to="/">Dashboard Summary</Link></li>
              <li><Link to="/vehicle-monitoring">Vehicle Monitoring</Link></li>
              <li><Link to="/predictive-alerts">Predictive Alerts</Link></li>
              <li><Link to="/service-scheduling">Service Scheduling</Link></li>
              <li><Link to="/post-service-feedback">Post-Service Feedback</Link></li>
              <li><Link to="/rca-capa-insights">RCA/CAPA Insights</Link></li>
              <li><Link to="/ueba-alerts">UEBA Alerts</Link></li>
              <li><Link to="/customer-engagement">Customer Engagement</Link></li>
            </ul>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<DashboardSummary />} />
              <Route path="/vehicle-monitoring" element={<VehicleMonitoring />} />
              <Route path="/predictive-alerts" element={<PredictiveAlerts />} />
              <Route path="/service-scheduling" element={<ServiceScheduling />} />
              <Route path="/post-service-feedback" element={<PostServiceFeedback />} />
              <Route path="/rca-capa-insights" element={<RCACAPAInsights />} />
              <Route path="/ueba-alerts" element={<UEBAAlerts />} />
              <Route path="/customer-engagement" element={<CustomerEngagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
