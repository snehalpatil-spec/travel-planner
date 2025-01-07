import React from 'react';
import './Login.css';
import loginImage from '../assets/login1.jpg'; // Import the image

const Login = () => (
    <div className="login-container" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="login-overlay">
            <h2 className="login-title">Login Page</h2>
            <form className="login-form">
                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    </div>
);

export default Login;
