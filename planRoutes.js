const express = require('express');
const Plan = require('../models/Plan');
const router = express.Router();

// Create a new plan
router.post('/', async (req, res) => {
    const { user, destination, startDate, endDate, activities } = req.body;
    try {
        const newPlan = new Plan({ user, destination, startDate, endDate, activities });
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all plans
router.get('/:user', async (req, res) => {
    try {
        const plans = await Plan.find({ user: req.params.user });
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
