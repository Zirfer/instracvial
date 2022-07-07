import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Route path="/" element={<App />} />
          <Route path=":id" element={<App />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);