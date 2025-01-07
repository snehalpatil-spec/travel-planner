// src/components/CreatePlan.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CreatePlan.css';


const CreatePlan = () => {
    const [form, setForm] = useState({
        destination: '',
        startDate: '',
        endDate: '',
        activities: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            ...form,
            activities: form.activities.split(',').map((activity) => activity.trim())
        };

        try {
            await axios.post('http://localhost:5000/api/plans', {
                user: 'testUser', // Change to the logged-in user or authentication details
                ...data
            });
            alert('Plan Created!');
        } catch (error) {
            console.error(error);
            alert('Error creating the plan');
        }
    };

    return (
        <div className="create-plan-container">
            <h2>Create Your Travel Plan</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        placeholder="Enter destination"
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={form.startDate}
                        onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={form.endDate}
                        onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                    />
                </div>
                <div>
                    <label>Activities (comma separated):</label>
                    <textarea
                        value={form.activities}
                        onChange={(e) => setForm({ ...form, activities: e.target.value })}
                        placeholder="e.g. Hiking, Sightseeing, Shopping"
                    ></textarea>
                </div>
                <button type="submit">Create Plan</button>
            </form>
        </div>
    );
};

export default CreatePlan;
