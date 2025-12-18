import React from 'react';
import './LoadingScreen.css';
import logo from './assets/logo.png'

const LoadingScreen = () => {
    
    return (
        <div className="loading-container">
            <img
                className="loading-image"
                src={logo}
                alt="Pixelated running character"
            />
            <p className="loading-text">
                ...iterating steps...
            </p>
        </div>
    );
};

export default LoadingScreen;