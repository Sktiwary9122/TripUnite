const Feedback = require("../models/feedbackBack");
const zod = require("zod");

const nameParser = zod.string();
const messageParser = zod.string();
const emailParser = zod.string().email();
const ratingParser = zod.enum([ '0', '1', '2', '3', '4', '5' ]);

exports.feedbackController = async (req,res)=>{

    try {
        const {name,email,message,rating} = req.body;
        console.log(name,message,rating)
        if(!name){
            return res.status(400).json({message:"Name is required"});
        }
        if(!email){
            return res.status(401).json({message:"Email is required"});
            }
            if(!message){
                return res.status(402).json({message:"Message is required"});
                }
                if(!rating){
                    return res.status(404).json({message:"Rating is required"});
                    }

        
        const isName = nameParser.safeParse(name)
        const isEmail = emailParser.safeParse(email)
        const isMessage = messageParser.safeParse(message)
        const isRating = ratingParser.safeParse(rating)
    
                // Handling name validation
                if (!isName.success) {
                    return res.status(400).json({ error: "name error" });
                }
        
                // Handling email validation
                if (!isEmail.success) {
                    return res.status(400).json({ error: "email error" });
                }
        
                // Handling feedback message validation
                if (!isMessage.success) {
                    return res.status(400).json({ error: "message error" });
                }
        
                // Handling rating validation
                if (!isRating.success) {
                    return res.status(400).json({ error: "rating error" });
                }
        const newFeedback =await Feedback.create({
            Name:name,
            Email:email,
            Message:message,
            Rating:rating
        })

        if(!newFeedback){
            return res.send("Error creating new feedBack");
        }
    
    
        res.status(200).json({
            message:"Feedback created successfully",
        })
    } catch (error) {
        console.log(error);
    }
}