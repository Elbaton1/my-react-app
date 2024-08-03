import React from 'react';
import animation1 from '../assets/animation1.gif'; // Ensure this path is correct
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#capabilities">Our Capabilities</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Patent Due Diligence AI</h1>
                <p>Gone are the days of spending weeks on diligence. AI provides comprehensive results before you're done reading the abstract.</p>
                <img src={animation1} alt="Search Animation" className="search-animation" />
            </div>
        </header>
    );
};

export default Header;











