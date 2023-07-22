const express = require('express');
const storage = require('node-persist');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); //body - parser

//initialize storage
storage.init();
app.post('/api/user', (req, res) => {
    const { id, name, email } = req.body;
    console.log(req.body)
    storage.setItem(id, { id, name, email });
    res.status(201).json({ message: "User created successfully" })
})
app.get("/api/user", async (req, res) => {
    const data = await storage.values();
    res.send(data);
})
app.get("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    const u = await storage.getItem(id);
    if(u!=undefined){
        res.send(data);
    }
    else{
        res.status(404).send({"message":"User Not Found with the Given Id"})
    }
})
app.listen(5000, () => {
    console.log("Server Started")
})