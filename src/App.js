import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BarGraph from './BarGraph.js';
import PieChart from './PieChart.js';
import Footer from './Footer';
import ApplicationFormView from './ApplicationFormView.js';

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
        <h1>The Job Hunt</h1>
        <div className='link-container'>
          <Link className='link' to="/">Application Metrics</Link>
          <Link className='link' to="/pie-chart">Where to Apply</Link>
          <Link className='link' to="/application-form">Application Form</Link>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<BarGraph formData={formData} />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/application-form" element={<ApplicationFormView onSubmit={handleFormSubmit} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;



