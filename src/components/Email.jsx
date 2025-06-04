import React, { useState, useEffect } from 'react';
import '../styles/Email.css';

const Email = () => {
  // State to control animation
  const [isMounted, setIsMounted] = useState(false);
  
  // Email address
  const email = "shrikhandetejas2202@gmail.com";
  
  // Trigger animation after component mounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={`email ${isMounted ? 'show' : ''}`}>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default Email;