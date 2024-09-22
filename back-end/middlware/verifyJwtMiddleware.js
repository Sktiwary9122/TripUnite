const jwt = require("jsonwebtoken")
const User = require("../models/User");
exports.verifyJwt =async  (req,res,next)=>{
  console.log("first")
     try {

        const token =  req.cookies?.AccessToken || req.header("authorization")?.replace("Bearer ", "");
        if(!token){
            res.status(401).json({message: "Token is required"})
        }
        const decodedToken = jwt.verify(token,process.env.jwt_secret);
        
        if(!decodedToken){
          res.status(401).json({message: "token is invalid"});
        }

        const user =await User.findById(decodedToken.id);

        if(!user){
           res.status(401).json({message: "user is not found"});
        }
        req.user = user;
        next();
     }catch (error) {
         console.error(error);
     }
}