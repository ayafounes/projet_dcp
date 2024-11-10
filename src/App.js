import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar';
import SlideComp from './components/Slide';
import Inputs from './components/Inputs';
import Calendrier from './components/Calendrier';
import { useState } from 'react';


function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="App">
      <NavbarComp />
      <SlideComp />
      <Inputs onOpenCalendar={() => setIsCalendarOpen(true)} />
      <Calendrier open={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </div>
  );
}

export default App;
