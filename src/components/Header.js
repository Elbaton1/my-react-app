import React from 'react';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa'; // Importing necessary icons
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <center><li><a href="#capabilities">Goals</a></li></center>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Patent Due Diligence AI</h1>
                <p>Gone are the days of spending weeks on diligence. AI provides comprehensive results before you're done reading the abstract.</p>
                <div className="icon-container">
                    <FaCode className="header-icon" />
                    <FaLaptopCode className="header-icon" />
                    <FaServer className="header-icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;

















