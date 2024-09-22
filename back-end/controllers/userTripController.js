const express= require("express");
const authN = require('../authN/tripsType');
const Trip = require("../models/Trips");
// const { create } = require("../models/User");
// const mongoose = require('mongoose');
exports.trip = async(req,res)=> {
   try {
      const createPayload = req.body;
      const isCorrect= authN.safeParse(createPayload)

      if(!isCorrect){
       return res.status(400).json({message: "AuthN is required"});
      }
      console.log(createPayload.Name);
      const createTrip = await Trip.create({
         Name: createPayload.Name,
         Description: createPayload.Description,
         Destination: createPayload.Destination,
         StartDate: createPayload.StartDate,
         EndDate: createPayload.EndDate,
         Location: createPayload.Location,
         estimatedBudget:createPayload.estimatedBudget,
         TravellerCount: createPayload.TravellerCount,
         localGuide : createPayload.localGuide,
         MeetUPLocation: createPayload.MeetUPLocation,
         Gender: createPayload.Gender,
         MinAge: createPayload.MinAge,
         MaxAge: createPayload.MaxAge,
         Remark: createPayload.Remark,
   
      })
      if(!createTrip){
         res.status(402).json({
            msg:"False input"
         })
      }

      res.status(200).json({
         message: "Trip created successfully",
      })
      
   } catch (error) {
      return console.log(error);
   }
   
};
