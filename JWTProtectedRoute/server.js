const express = require('express');

const app= express();
require('./dbconfig');
app.use(express.json());

app.use("/api/auth",require('./routes/user_routes'));

app.listen(5000,(err)=>{
    if(err)
        throw err;
    else
        console.log("Server Started")
})