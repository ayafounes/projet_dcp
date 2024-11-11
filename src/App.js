

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import SlideComp from './components/Slide';
import Inputs from './components/Inputs';
import Calendrier from './components/Calendrier';
import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="App">
      <Router>
      <NavbarComp />
      <SlideComp />
      <Inputs onOpenCalendar={() => setIsCalendarOpen(true)} />
      <Calendrier open={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
      <Routes>
           <Route path="/login" element={<Login />} /> {/* Route to the login form */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
