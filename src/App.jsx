import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarResp from '../components/navbar/navbar';
import Home from '../components/home/home';
import DatiTabella from '../components/tabella/datiTabella';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarResp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voli" element={<DatiTabella type="voli" />} />
          <Route path="/hotels" element={<DatiTabella type="hotels" />} />
          <Route path="/attività" element={<DatiTabella type="attività" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;