// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
            <Link to="/">
                <img src="/logo.jpeg" alt="Logo" style={{ height: '50px', width: 'auto' }} />
            </Link>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">À propos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
