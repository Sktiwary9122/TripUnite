//user Auth Schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Trip:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trips'
    }
  ],
  AccessToken:{
    type: String,
    default: null
  }
});
module.exports = mongoose.model("User", UserSchema);