const express = require('express');
const router = express.Router();
const Ride = require('../models/Ride'); // Ensure Ride model exists

// Book a Ride
router.post('/book', async (req, res) => {
    try {
        const { userId, pickupLocation, dropoffLocation, pickupTime, carType, paymentMethod } = req.body;

        if (!userId || !pickupLocation || !dropoffLocation || !pickupTime || !carType || !paymentMethod) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newRide = new Ride({ userId, pickupLocation, dropoffLocation, pickupTime, carType, paymentMethod });
        await newRide.save();

        res.status(201).json({ message: 'Ride booked successfully', ride: newRide });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
