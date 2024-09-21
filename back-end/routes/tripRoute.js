const express= require("express");
const mongoose = require('mongoose')
const Trip = require("../models/Trips");
exports.allTrips =async (req, res) => {
    try {
        const trips = await Trip.find(); // Fetch all users from the database
        res.status(200).json({trips});
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Server error' });
    }
};