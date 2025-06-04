import React, { useState, useEffect } from 'react';
import '../styles/Loader.css';

const Loader = () => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    // Increment the count from 0 to 100 for loading animation
    const interval = setInterval(() => {
      setCount(prevCount => {
        // If count reaches 100, clear interval and set finished state
        if (prevCount >= 100) {
          clearInterval(interval);
          // Small delay before setting finished to true for smoother transition
          setTimeout(() => setFinished(true), 300);
          return 100;
        }
        // Otherwise increment by a random amount between 1-5
        return prevCount + Math.floor(Math.random() * 5) + 1;
      });
    }, 80);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader ${finished ? 'finished' : ''}`}>
      <div className="loader-container">
        {/* Logo SVG */}
        <svg className="logo" width="100" height="100" viewBox="0 0 100 100">
          <polygon 
            points="50,5 95,25 95,75 50,95 5,75 5,25" 
            stroke="var(--green)" 
            strokeWidth="2" 
            fill="none" 
          />
          <text x="50" y="70" textAnchor="middle" fill="var(--green)" fontSize="50" fontFamily="var(--font-mono)">
            T
          </text>
        </svg>
        
        {/* Loading percentage */}
        <div className="percentage">
          <span>{count}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;