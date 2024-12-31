import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LandingPage from './components/Home/LandingPage';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Uicompanion from './components/Projects/UI-Companion';
import ExploreGaguk from './components/Projects/Explore-gaguk';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
          <Route path="/ui-companion-tool" element={<Uicompanion />} />
        <Route path="/explore-gagugk" element={<ExploreGaguk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
