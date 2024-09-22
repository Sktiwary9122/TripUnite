const express= require("express");
const tripSchema = require('../authN/tripsType');
const Trip = require("../models/Trips");
// const { create } = require("../models/User");
// const mongoose = require('mongoose');
exports.trip = async (req, res) => {
   try {
      const createPayload = req.body;
      
      // Validate the payload using authN (tripSchema)
      const isCorrect = tripSchema.safeParse(createPayload);
      if (!isCorrect.success) {
         console.log("Validation Error:", isCorrect.error); // Log validation errors
         return res.status(400).json({ 
            message: "AuthN is required and must be valid",
            error: isCorrect.error // Return the error for debugging
         });
      }
    
      console.log("Payload Validated Successfully:", createPayload.Name);

      // Create the trip
      const createTrip = await Trip.create({
         Name: createPayload.Name,
         Description: createPayload.Description,
         Destination: createPayload.Destination,
         StartDate: createPayload.StartDate,
         EndDate: createPayload.EndDate,
         Location: createPayload.Location,
         estimatedBudget: createPayload.estimatedBudget,
         TravellerCount: createPayload.TravellerCount,
         localGuide: createPayload.localGuide,
         MeetUPLocation: createPayload.MeetUPLocation,
         Gender: createPayload.Gender,
         MinAge: createPayload.MinAge,
         MaxAge: createPayload.MaxAge,
         Remark: createPayload.Remark,
      });

      // Set the createdBy field
      createTrip.createdBy = req.user._id;
      await createTrip.save();

      if (!createTrip) {
         return res.status(402).json({
            msg: "False input"
         });
      }

      // Successful trip creation response
      return res.status(200).json({
         msg: "Trip created successfully",
         trip: createTrip
      });

   } catch (error) {
      console.error("Error creating trip:", error);
      return res.status(500).json({
         msg: "Internal Server Error",
         error: error.message || "Something went wrong"
      });
   }
};