import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlanList.css';

const PlanList = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            const response = await axios.get('http://localhost:5000/api/plans/testUser');
            setPlans(response.data);
        };
        fetchPlans();
    }, []);

    return (
        <div className="plan-list-container">
            <h2>Your Plans</h2>
            <ul className="plan-list">
                {plans.map((plan) => (
                    <li key={plan._id}>
                        <span className="plan-destination">{plan.destination}</span>
                        <span className="plan-dates">
                            {plan.startDate} to {plan.endDate}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanList;
