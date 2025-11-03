import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

const container = createRoot(document.getElementById('root'));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

