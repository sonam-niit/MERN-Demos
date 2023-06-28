const connection= require('./models/index');
const cors= require('cors');
const express= require('express');

const app= express();
//body parser
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.status(200).send({message:"Working"})
})

app.use("/api/product",require('./routes/product_routes'))

app.listen('8080',()=>{
    console.log("Server Started...")
})