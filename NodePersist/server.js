const express = require('express');
const storage = require('node-persist');

const app = express();
storage.init();

app.use(express.json())//JSON Parser

app.post("/employee", async (req, res) => {
    let students = [];
    const obj = req.body;
    if (await storage.getItem('students') != undefined) {
        students = await storage.getItem('students');
    }
    students.push(obj);
    storage.setItem("students", students);
    res.status(201).send("Object Created successfully")
})

// app.post("/employee",(req,res)=>{

//     const obj= req.body;
//     const {id,name,designation}=obj;//Destructuring of object
//     storage.setItem(id,obj);
//     res.status(201).send("Object Created successfully")
// })

app.get("/employee", async (req, res) => {
    const data = await storage.getItem('students');
    if (data != undefined) {
        //res.send(data);
        let html='<h1>Employee Details</h1>'
        for(let x of data){
            html+=`<h2>Id: ${x.id}</h2>
                    <h2>Name: ${x.name}</h2>
                    <h2>Dsignation:${x.designation}</h2>
            `
        }
        res.send(html);
    } else {
        res.send("No Employee Available in the Storage")
    }
})
app.get("/employee/sme",async (req,res)=>{
    let data = await storage.getItem('students');
    if (data != undefined) {
        data= data.filter((value)=>value.designation=="SME")
        let html='<h1>Employee Details</h1>'
        for(let x of data){
            html+=`<h2>Id: ${x.id}</h2>
                    <h2>Name: ${x.name}</h2>
                    <h2>Dsignation:${x.designation}</h2>
            `
        }
        res.send(html);
    } else {
        res.send("No Employee Available in the Storage")
    }
})
app.get("/employee/dev",async (req,res)=>{
    let data = await storage.getItem('students');
    if (data != undefined) {
        data= data.filter((value)=>value.designation=="Developer")
        let html='<h1>Employee Details</h1>'
        for(let x of data){
            html+=`<h2>Id: ${x.id}</h2>
                    <h2>Name: ${x.name}</h2>
                    <h2>Dsignation:${x.designation}</h2>
            `
        }
        res.send(html);
    } else {
        res.send("No Employee Available in the Storage")
    }
})

app.listen(5000, () => {
    console.log("Started Successfully")
})