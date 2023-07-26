import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarGraph from './BarGraph.js';
import PieChart from './PieChart.js';
import Footer from './Footer';
import ApplicationForm from './ApplicationForm';
import { FormDataProvider } from './FormDataContext';

function App() {
  

  return (
    <FormDataProvider >
      <div className="App">
        <header className="App-header">
          <h1>The Job Search</h1>
          <div className='link-container'>
            <a className='link' href="/application-form">Enter Data</a>
            <a className='link' href="/">Bar Graph</a>
            <a className='link' href="/targets">Where to Apply</a>
          </div>
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<BarGraph />} />
            <Route path="/targets" element={<PieChart />} />
            <Route path="/application-form" element={<ApplicationForm />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </FormDataProvider>
  );
}

export default App;
