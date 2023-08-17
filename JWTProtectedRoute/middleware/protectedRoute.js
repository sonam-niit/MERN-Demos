const UserModel= require('../models/user_model');
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv').config();

const isAuthenticated= async (req,res,next)=>{

    const authHeader=req.headers['authorization'];
    const token= authHeader.split(' ')[1];

    if(!token){
        return res.status(403).send({message:"You are not logged In.."})
    }
    try {
        jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
            if(err){
                return res.status(401).json({message:"invalid Token"})
            }
            req.user=payload;
            next();
        })
    } catch (error) {
        res.send(error);
    }
}

module.exports=isAuthenticated;