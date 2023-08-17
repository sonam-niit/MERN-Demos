const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require("jsonwebtoken");
const dotenv= require('dotenv');
dotenv.config();
const UserModel= require("../models/user_model");
const isAuthenticated = require('../middleware/protectedRoute');

const router= express.Router();

router.post("/register",async(req,res)=>{
    const {name,email,username,password}=req.body;
    //Hash Password
    const hasedpassword= await bcrypt.hash(password,12);
    const newUser= new UserModel({
        name,
        email,
        password:hasedpassword,
        username
    })
    try {
        const resp=await newUser.save();
        res.status(201).send({message:"User registered",resp})
    } catch (error) {
        res.status(500).send({message:"Some Internal Server Error"})
    }
    
})
router.post("/login",async(req,res)=>{
    const {username,password}= req.body;
    const user= await UserModel.findOne({username});
    if(!user){
        return res.status(400).send("Username is not registered with US")
    }
    const match= await bcrypt.compare(password,user.password);
    if(match){
        const payload={
            id:user._id,
            name:user.name,
            username:user.username
        }
        const jwtToken=jwt.sign(payload,process.env.JWT_SECRET);
        res.status(200).send({message:"Login Successfull",jwt:jwtToken,payload})
    }else{
        return res.status(400).send({message:"Invalid Credentials"})
    }
})
//protected Route
router.get("/profile",isAuthenticated,async(req,res)=>{
    console.log(req.user);
    const date= new Date(req.user.iat*1000);
    res.send({messgae:"Profile page",user:req.user,date})
})
router.post("/logout",async(req,res)=>{
    
})

module.exports=router;