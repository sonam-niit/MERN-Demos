const express= require('express');
const storage= require('node-persist');

const app= express();
app.use(express.json());
storage.init();

app.post("/add",async(req,res)=>{
    try {
        let users=await storage.getItem("users");
        console.log(users);
        if(users==undefined){
            users=[];
        }
        users.push(req.body);
        console.log(users)
        await storage.setItem("users",users)
        res.send("User Created Successfully..!!!")
    } catch (error) {
        res.send(error)
    }

})
app.get("/getdata",async(req,res)=>{
    const users= await storage.getItem("users");
    if(users==undefined){
        res.send("No data available")
    }
    let data="<h1>User's List</h1>";
    for(let u of users){
        data+= `<h2>Id: ${u.id}</h2>
        <h3>Name: ${u.name}</h3>
        <h3>Email: ${u.email}</h3>
        <h3>Country: ${u.country}</h3>`
    }
    res.send(data);
})
app.get("/get/:id",async(req,res)=>{
    const users= await storage.getItem("users");
    const id= req.params.id;
    const user=users.find((value)=>value.id==id)
    console.log(user);
    res.send(user);
})

app.listen(5000,()=>{
    console.log("Server Started");
})