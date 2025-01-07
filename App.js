import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Adjust the path as needed
import Login from './components/Login'; // You need to create this component
import Signup from './components/Signup'; // You need to create this component
import Contact from './components/Contact'; // You need to create this component
import CreatePlan from './components/CreatePlan'; // You already have this
import PlanList from './components/PlanList'; // You already have this

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePlan />} />
        <Route path="/plans" element={<PlanList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
