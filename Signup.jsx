// src/components/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import the Signup page CSS

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (validation, API call, etc.)
        console.log('Form submitted', formData);
    };

    return (
        <div className="signup-container">
            <div className="signup-overlay">
                <h2 className="signup-title">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="input-field" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="input-field" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required
                    />
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        className="input-field" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required
                    />
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <div className="signup-footer">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
