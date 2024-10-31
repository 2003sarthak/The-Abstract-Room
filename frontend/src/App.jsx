import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/aboutus/AboutUs';
import Doubts from './pages/doubts/Doubts';
import ComScr from './pages/CommScree/CommunityScreening';
import Membership from './pages/membership/Membership';
import WhatDone from './pages/whatdone/WhatDone'
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatdone" element={<WhatDone />} />
        <Route path="/commscr" element={<ComScr />} />
        <Route path="/doubt" element={<Doubts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
