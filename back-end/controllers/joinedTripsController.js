
const Trip = require("../models/Trips")

exports.joinedTrips=async(req,res) => {
    
    try {
        const findJoinedTrips = await Trip.find({'joinedBy.userId':req.user._id});
        if(findJoinedTrips.length == 0){
            return res.status(404).json({message:"No trips found"})
        }
        res.status(200).json({trips:findJoinedTrips});
    } catch (error) {
        console.log("error fetching joined trips",error);

    }
    

}
