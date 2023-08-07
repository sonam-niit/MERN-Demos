const express= require('express');
const storage = require('node-persist');
//create server
const app= express();
//initialize storage
storage.init();
//JSON Parser
app.use(express.json());

//get All Users
app.get("/api/user",async (req,res)=>{
    try {
        const result= await storage.values();
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})
//get User By id
app.get("/api/user/:id",async (req,res)=>{
    const id=req.params.id;
    try {
        const result= await storage.getItem(id);
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})
//Create New User
app.post("/api/user",(req,res)=>{
    const {id,name,email,country}= req.body;
    storage.setItem(id,{id,name,email,country})
    res.send("New User Created")
})
//Update the user 
app.put("/api/user/:uid",async(req,res)=>{
    const id= req.params.uid;
    try {
        const data= await storage.getItem(id);
        if(data!=undefined){
            await storage.setItem(id,req.body);
            res.send("Data updated with Id "+id);
        }else{
            res.send("User not available to update");
        }
    } catch (error) {
        res.send(error)
    }
})
//Delete the User
app.delete("/api/user/:id",async(req,res)=>{
    const id= req.params.id;
    try {
        const data= await storage.getItem(id);
        if(data!=undefined){
            await storage.removeItem(id);
            res.send("User deleted with Id "+id)
        }else{
            res.send("No user available to delete "+id)
        }
    } catch (error) {
        res.send(error)
    }
    
})

app.listen(5000,()=>{
    console.log("Server Started");
})