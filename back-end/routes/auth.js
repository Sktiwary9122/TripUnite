const express = require("express");
const mongoose = require('mongoose')
const authN = require("../authN/tripsType")
const router = express.Router();
const { registerUser, loginUser , logoutUser , JoinTrips, getTrips} = require("../controllers/authController");
const {feedbackController} = require("../controllers/feedbackController")
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
router.post('/createFeedback', feedbackController )

router.get('/allTrips',allTrips);
router.get('/userTrips',verifyJwt,userTrips);
router.get('/trips/:trip_id', getTrips);

module.exports = router;