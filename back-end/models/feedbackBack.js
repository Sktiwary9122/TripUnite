const mongoose = require("mongoose");
const { required } = require("../authN/tripsType");

const feedBackSchema =new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true
        },
        Email:{
            type: String,
            required: true
        },
        Message:{
            type: String,
            required: true
        },
        Rating:{
            type: String,
            required: true
        }
},{
    timestamps: true
})

module.exports = mongoose.model('Feedback', feedBackSchema);

