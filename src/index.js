import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsContextProvider from './context/SettingsContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);
