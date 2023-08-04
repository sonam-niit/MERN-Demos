var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');

const cors =require('cors');
app.use(cors());

var jsonParser=bodyParser.json();
storage.init();

app.post('/todolist', jsonParser, async (req, res) => {
  const { task_name } = req.body;
  await storage.setItem(task_name, { task_name });
  res.send("Added task successfully!");
});

app.get("/alltasks", async (req, res) => {
    //getting all the records from the storage
    const data = await storage.values();
    res.send(data);
  })
  
  app.listen(5000, () => {
      console.log('server has started!');
  });