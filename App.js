// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, marginRight: '20px' }}>
      <h2 style={{ fontSize: '2.2em', color: 'black' }}>Accueil</h2>
      <p>
        <span style={{ fontSize: '3.2em', color: '#3498db' }}>Libérez les possibilités grâce à la technologie</span>
        <br />
        <span style={{ fontSize: '2.2em', color: 'black' }}>Votre partenaire numérique pour une efficacité optimale</span>
      </p>
    </div>
    <div style={{ flex: 1 }}>
      <img
        src="/image.webp"
        alt="Image FreePik"
        style={{ maxWidth: '70%', height: 'auto' }}
      />
    </div>
  </div>
);

const About = () => <h2>À propos</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default App;
