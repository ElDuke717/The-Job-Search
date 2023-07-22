import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarGraph from './BarGraph.js';
import PieChart from './PieChart.js';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Job Hunt</h1>
        <div className='link-container'>
        <a className='link' href="/">Bar Graph</a>
        <a className='link' href="/pie-chart">Where to Apply</a>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<BarGraph />} />
          <Route path="/targets" element={<PieChart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );
}

export default App;

