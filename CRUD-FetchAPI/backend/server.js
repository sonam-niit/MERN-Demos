const express= require('express');
const storage= require('node-persist');
const cors= require('cors');

const app= express();
app.use(cors());
app.use(express.json()); //body - parser

//initialize storage
storage.init();
app.post('/api/user',(req,res)=>{
    const {id,name,email}=req.body;
    console.log(req.body)
    storage.setItem(id,{id,name,email});
    res.status(201).json({message:"User created successfully"})
})
app.listen(5000,()=>{
    console.log("Server Started")
})