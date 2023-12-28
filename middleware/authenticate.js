const jwt = require('jsonwebtoken');
require('dotenv').config();
require('cookie-parser')
const User=require('../models/userSchema')
const Authenticate=async (req,res,next)=>{
    try {
        
        
        const token=req.cookies.Mytoken;
        console.log(token)
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY)
        // verify and stores the user details in verifyToken
        const rootUser=await User.findOne({_id:verifyToken._id})
        
        if(!rootUser){
            throw new Error("User not found")
        }

        req.rootUser=rootUser;
        req.token=token;
        req.userId=rootUser._id;

        next()

    } catch (error) {
        console.log(error)
        res.status(401).send("Unauthorised_user")
    }
}

module.exports= Authenticate;