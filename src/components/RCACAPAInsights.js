import React, { useState } from 'react';

// Dummy RCA/CAPA insights data
const initialInsights = [
  {
    id: 1,
    component: 'Engine',
    issue: 'Overheating',
    recommendedAction: 'Check coolant levels and radiator',
    recurring: true
  },
  {
    id: 2,
    component: 'Battery',
    issue: 'Low charge retention',
    recommendedAction: 'Replace battery',
    recurring: false
  },
  {
    id: 3,
    component: 'Suspension',
    issue: 'Excessive vibration',
    recommendedAction: 'Inspect shock absorbers',
    recurring: true
  }
];

const RCACAPAInsights = () => {
  const [insights] = useState(initialInsights);

  return (
    <div className="rca-capa-insights">
      <h2>RCA/CAPA Insights</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Issue</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          {insights.map(insight => (
            <tr key={insight.id} className={insight.recurring ? 'recurring' : ''}>
              <td>{insight.component}</td>
              <td>{insight.issue}</td>
              <td>{insight.recommendedAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>{`
        .recurring {
          background-color: #fff1f0;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default RCACAPAInsights;
