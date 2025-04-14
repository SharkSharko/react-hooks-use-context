import React from 'react';  // Import React
import './Interests.css';   // Import the CSS file for styling

function Interests({ interests }) {
  return (
    <div className="interests">
      <h3>Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index} className="interest-item">
            {interest}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;


