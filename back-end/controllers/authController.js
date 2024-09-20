const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const zod= require('zod');
const User = require("../models/User");

// const userZod = zod.object({
//   email: zod.string().email(),
//   password: zod.string().min(6).max(1024),
//   fullName: zod.string().min(2).max(50)
// })

const emailParser  = zod.string().email();
const passwordParser = zod.string().min(6);
const fullNameParser = zod.string().max(50);



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
      id: user.id,
    },
      process.env.jwt_secret,
     {
      expiresIn: "1d"
    })
    if(!token){
        return res.status(500).json({message: "Failed to generate token"});
    }

    user.AccessToken = token
    await user.save();
    
    const options = {
       httpOnly: true,
       secure:true
    }
    res.cookie("AccessToken", user.AccessToken, options);
    res.status(200).json({message: "Token saved successfully"});
}

exports.logoutUser = async (req, res) => {
   console.log(req.cookies);
   try {
    const cookie = req.cookies;
 
    if(!cookie){
        return res.status(400).json({message: "No cookie found"});
    }
    const Token = cookie.AccessToken;
    const user = await User.findOne({_id: Token.id});
    
    if(!user){
        return res.status(400).json({message: "User not found"});
    }
    user.AccessToken = null;
    user.save();
 
    res.clearCookie("AccessToken", {path: "/login"});
    res.status(200).json({message: "User logged out successfully"});
   } catch (error) {
       console.log(error);
   } 
  }
