const express = require("express");
const mysql = require('mysql')
const app = express();
app.use(express.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
})
connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connected to database")
    }
})

app.get("/createtable",(req,res)=>{
    connection.query(`CREATE TABLE IF NOT EXISTS customer(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        PRIMARY KEY(id))`,(err)=>{
            if(err)
            {
                console.log(err)
            }else{
                res.send("Table Created")
            }
        })
})

app.post("/api/cust", (req, res) => {
    const { name, email } = req.body;
    connection.query(`INSERT INTO customer(name,email) VALUES("${name}","${email}")`,
        (err, result) => {
            if (err) {
                res.send(err);
            }else{
                res.send({message:"Customer Added",result})
            }
        })
})
app.get("/api/cust",(req,res)=>{
    connection.query(`SELECT * FROM customer`,
    (err,result)=>{  
        if (err) {
            res.send(err);
        }else{
            res.send(result)
        }
     });
})
app.get("/api/cust/:id",(req,res)=>{
    const id = req.params.id;
    connection.query(`select * from customer WHERE id=${id}`,
    (err,result)=>{
        if (err) {
            res.send(err);
        }else{
            res.send(result)
        }
    })
})
app.delete("/api/cust/:id",(req,res)=>{
    const id = req.params.id;
    connection.query(`DELETE FROM customer WHERE id=${id}`,
    (err,result)=>{
        if (err) {
            res.send(err);
        }else{
            res.send({message:"Customer Deleted",result})
        }
    })
})
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    })