const express = require("express");
const mongoose = require('mongoose')
const authN = require("../authN/tripsType")
const router = express.Router();
const { registerUser, loginUser , logoutUser , JoinTrips } = require("../controllers/authController");
const {trip} = require("../controllers/userTripController");
const {allTrips} = require("../routes/tripRoute");
const Trip = require("../models/Trips")
const {verifyJwt} = require("../middlware/verifyJwtMiddleware");
const { userTrips } = require("../controllers/dashboardController");
const { verify } = require("jsonwebtoken");
// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post("/register", registerUser);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", loginUser);
router.post("/logout",verifyJwt, logoutUser);
router.post('/createTrips',verifyJwt,trip);
router.post('/joinTrips',verifyJwt,JoinTrips);
router.get('/allTrips',allTrips);
router.get('/userTrips',verifyJwt,userTrips);
router.get('/trips/:trip_id', async (req, res) => {
    // Extract trip_id from params
    const { trip_id } = req.params;

    // Check if trip_id is valid
    if (!trip_id) {
        return res.status(400).json({ msg: "Invalid trip id" });
    }

    try {
        // Find the trip by ID
        const trip = await Trip.findById(trip_id);

        // If no trip found, return a 404 error
        if (!trip) {
            return res.status(404).json({ msg: "Trip not found" });
        }

        // Return the trip data
        return res.status(200).json({ trip });
    } catch (error) {
        // If there is an error in fetching the trip, return a 500 error
        console.error("Error fetching trip:", error);
        return res.status(500).json({ msg: "Server error" });
    }
});


module.exports = router;
