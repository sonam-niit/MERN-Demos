//DB Connections
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/salesapp')
.then(()=>console.log("Connected...!!!"))
.catch((err)=>{console.log("Error Occured ",err)})

const Product= require('./product')