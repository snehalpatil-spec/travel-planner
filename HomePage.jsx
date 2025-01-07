// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import homeImage from '../assets/home1.jpg'; // Correct the path
import travelVideo from '../assets/travelvideo.mp4'; // Import the video file
import homeImage2 from '../assets/home2.jpg'; // Import the second image
import hLogo from '../assets/hlogo.png'; // Import the logo

const HomePage = () => (
    <div className="homepage-container">
        <header className="header">
            <div className="header-links">
                <img src={hLogo} alt="Logo" className="header-logo" />
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>

        <div className="image-container">
            {/* Add the main image */}
            <img src={homeImage} alt="Travel Planner" className="homepage-image" />
            <div className="text-overlay">
                <h1>Welcome to Travel Planner</h1>
                <div>
                    <Link to="/create">Create a Plan</Link>
                    <Link to="/plans">View Plans</Link>
                </div>
            </div>
        </div>

        <div className="side-content">
            {/* Adjusted the second image to move slightly up */}
            <img src={homeImage2} alt="Travel Inspiration" className="side-image" style={{ marginTop: '-90px' }} />
            <div className="video-container">
                <video className="homepage-video" controls>
                    <source src={travelVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
);

export default HomePage;
