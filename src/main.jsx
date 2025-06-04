import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Mount the React application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);