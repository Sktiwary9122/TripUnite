const express = require("express");
const authN = require("../authN/tripsType")
const router = express.Router();
const { registerUser, loginUser , logoutUser } = require("../controllers/authController");
const {trip} = require("../controllers/userTripController");
const {allTrips} = require("../routes/tripRoute")
const {verifyJwt} = require("../middlware/verifyJwtMiddleware")
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
router.get('/allTrips',allTrips);

module.exports = router;
