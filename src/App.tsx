import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/about';
import Academics from './pages/academics';
import Admissions from './pages/admissions';
import Events from './pages/events';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;