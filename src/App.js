import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/index';
import {Contact} from './pages/contact';
import {Resume} from './pages/resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
