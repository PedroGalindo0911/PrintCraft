import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/:code" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
