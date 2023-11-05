import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <Router>
    <App />
  </Router>
);
