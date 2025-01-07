import React, { useState } from 'react';
import axios from 'axios';
import './PlanForm.css';

const PlanForm = () => {
    const [form, setForm] = useState({ destination: '', startDate: '', endDate: '', activities: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...form, activities: form.activities.split(',') };
        try {
            await axios.post('http://localhost:5000/api/plans', { user: 'testUser', ...data });
            alert('Plan Created');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Create a Travel Plan</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Destination"
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                />
                <input
                    type="date"
                    onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                />
                <input
                    type="date"
                    onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                />
                <textarea
                    placeholder="Activities (comma separated)"
                    onChange={(e) => setForm({ ...form, activities: e.target.value })}
                ></textarea>
                <button type="submit">Create Plan</button>
            </form>
        </div>
    );
};

export default PlanForm;
