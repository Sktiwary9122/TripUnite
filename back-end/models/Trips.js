
const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Destination: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  estimatedBudget: {
    type: String,
    required: true,
  },
  TravellerCount: {
    type: Number,
    required: false,
  },
  localGuide: {
    type: Boolean,
    required: true,
  },
  MeetUPLocation: {
    type: String,
    required: true,
  },
  
    Gender: {
      type: String,
      required: false,
    },
  
  MinAge: {
    type: Number,
    required: true,
  },
  MaxAge: {
    type: Number,
    required: true,
  },
  Remark: {
    type: String,
  },
  createdBy: 
{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User", // Array of strings for user IDs or names
    required: false,
}
  
});
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;