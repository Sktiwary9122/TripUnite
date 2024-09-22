const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const zod= require('zod');
const User = require("../models/User");
const Trip = require("../models/Trips");
const { trip } = require('./userTripController');

// const userZod = zod.object({
//   email: zod.string().email(),
//   password: zod.string().min(6).max(1024),
//   fullName: zod.string().min(2).max(50)
// })

const emailParser  = zod.string().email();
const passwordParser = zod.string().min(6);
const fullNameParser = zod.string().max(50);
const ageParser = zod.number();
const contactParser=zod.string().min(10).max(14);
const genderParser=zod.string();


exports.registerUser = async (req,res)=>{
      
      const email = req.body.email;
      const password = req.body.password;
      const fullName = req.body.fullName;
     
      // const CorrectDetails = userZod.safeParse(user); 
      const isEmail = emailParser.safeParse(email);
      const isPassword = passwordParser.safeParse(password);
      const isFullName = fullNameParser.safeParse(fullName);
     

      if(!isEmail.success){
        return res.status(400).json({errors:[{msg:"Invalid email"}]})
      }
      if(!isPassword.success){
        return res.status(400).json({errors:[{msg:"Password must be at least 6 characters long"}]})
      }
      if(!isFullName.success){
        return res.status(400).json({errors:[{msg:"Full name must be at least 2 characters long"}]})
      }
    

      const userExists = await User.findOne({email:email});
      const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
      if(userExists){
        return res.status(400).json({errors:[{msg:"User already exists"}]})
      }
      else{
        try {
          User.create({
            email: email,
            password: hashedPassword,
            fullName: fullName
          }).then(() => {
            res.status(201).json({msg:"User registered successfully"})
          })
        } catch (error) {
          console.log(error)
        }
      }
}

exports.loginUser = async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const isEmail = emailParser.safeParse(email);
    const isPassword = passwordParser.safeParse(password);
    if(!isEmail.success || !isPassword.success){
      return res.status(400).json({errors:[{msg:"Invalid email or password type"}]})
    }
    
    const user = await User.findOne({email:email});
     
    if(!user){
    return res.status(404).json({message: "User not found"});
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({msg:"Invalid password"})
    }
    
    const token = jwt.sign({
      id: user._id,
    },
      process.env.jwt_secret,
     {
      expiresIn: "1d"
    })
    if(!token){
        return res.status(500).json({message: "Failed to generate token"});
    }
    const decoded = jwt.verify(token,process.env.jwt_secret);
   
    user.AccessToken = token
    await user.save();

    
    const options = {
       httpOnly: true,
       secure: true,
       SameSite : 'None'
    }
    res.cookie("AccessToken", user.AccessToken, options);
    res.status(200).json({
      message: "Token saved successfully",
      user : user
    });
    
}

// exports.logoutUser = async (req, res) => {
//   try {

//     const cookies = req.cookies;  
   
//     if (!cookies || !cookies.AccessToken) {
//       return res.status(400).json({ message: "No cookie found" });
//     }

//     const token = cookies.AccessToken;

//     // Verify the JWT token to extract the user ID
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const userId = decoded.id;


//     // Find the user in the database using the decoded ID
//     const user = await User.findOne({ _id: userId });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Invalidate the user's access token by setting it to null
//     user.AccessToken = null;
//     await user.save();

//     // Clear the token cookie
//     res.clearCookie("AccessToken", { path: "/" });

//     // Send a success response
//     return res.status(200).json({ message: "User logged out successfully" });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

exports.logoutUser = async(req, res) => {
  // console.log(req.user);
  const user =  User.findByIdAndUpdate(
      req.user._id,
      {
          $set: {
              refreshToken: undefined // this removes the field from document
          }
      }
  )
  const options = {
      httpOnly: true,
      secure: true
  }

  res.clearCookie("AccessToken", options);
  res.clearCookie("RefreshToken", options);

  res
  .status(200)
  .json({
    message: "User logged out successfully",
  })
}

//Controller to join trips:
exports.JoinTrips = async (req, res) => {
  try {
      console.log(req.user);
      const tripId = req.params.trip_id;  // Access 'trip_id' as defined in the route

      const { Name, Contact, Age, Gender } = req.body;

      // Validate input
      const isName = fullNameParser.safeParse(Name);
      const isAge = ageParser.safeParse(Age);
      const isContact = contactParser.safeParse(Contact);
      const isGender = genderParser.safeParse(Gender);

      if (!isName.success) {
          return res.status(400).json({ message: "Invalid Name" });
      }

      if (!isAge.success) {
          return res.status(400).json({ message: "Invalid Age" });
      }
      if (!isContact.success) {
          return res.status(400).json({ message: "Invalid Contact" });
      }
      if (!isGender.success) {
          return res.status(400).json({ message: "Invalid Gender" });
      }

      if (!tripId) {
          return res.status(400).json({ message: "Trip ID is required" });
      }

      // Fetch the trip
      const trip = await Trip.findById(tripId);

      if (!trip) {
          return res.status(404).json({ message: "Trip not found" });
      }

      // Assuming joinedBy is an array and you are adding new participants
      trip.joinedBy.push({
          Name,
          Contact,
          Age,
          Gender,
          userId: req.user._id
      });

      // Save trip document
      await trip.save();

      res.status(200).json({
          message: "Trip joined successfully",
      });
  } catch (error) {
      console.error("Error joining trip: ", error);
      res.status(500).json({ message: "Server error" });
  }
};



//GEt particular Trip data
exports.getTrips = async (req, res) => {
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
};