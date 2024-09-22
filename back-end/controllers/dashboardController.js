const express= require("express");
const mongoose = require('mongoose')
const Trip = require("../models/Trips");
exports.userTrips =async (req, res) => {
    console.log(req.user);
    try {
        const trips = await Trip.find({
            createdBy:req.user._id
        }); 
        console.log(trips);
        res.status(200).json({trips});
    } catch (error) {
        console.error('Error fetching user trips:', error);
        res.status(500).json({ error: 'Server error' });
    }
};