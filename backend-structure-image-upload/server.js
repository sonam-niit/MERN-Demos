const dotenv= require('dotenv');
const express= require('express')
const UserRoutes= require('./routes/user_route')
dotenv.config();
const app= express();
const PORT= process.env.PORT || 7000

app.use("/api/user",UserRoutes)

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
