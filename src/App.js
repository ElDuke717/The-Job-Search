import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarGraph from './BarGraph.js';
import PieChart from './PieChart.js';
import Footer from './Footer';
import ApplicationForm from './ApplicationForm';

function App() {
  const [formData, setFormData] = useState({
    applications: 0,
    phoneScreens: 0,
    inPersonInterviews: 0,
    offers: 0,
  });

  const handleFormSubmit = (formData) => {
    setFormData(formData);
  };
  return (
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
          <Route path="/" element={<BarGraph formData={formData}/>} />
          <Route path="/targets" element={<PieChart />} />
          <Route path="application-form" element={<ApplicationForm/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;

