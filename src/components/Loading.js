// src/components/Loading.js
import React from 'react';
import { FaRobot } from 'react-icons/fa'; // Import an icon for the animation
import '../App.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <FaRobot className="loading-icon" />
            <div className="loading-text">Loading...</div>
        </div>
    );
};

export default Loading;
