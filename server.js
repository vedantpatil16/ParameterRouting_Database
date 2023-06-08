const express = require('express');
const {MongoClient} = require('mongodb');


const URL = "mongodb://127.0.0.1:27017/"; 
const app = express();


const client = new MongoClient(URL);


app.listen(5100, function(req,res){
  console.log("Server is started succesfully");
});

//Handling cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

app.get('/departments/:id', getConnection);

async function getConnection(req, res)
{
  paramID = (req.params.id)
  let result = await client.connect();
  let db = result.db("HRPortal");

  if(paramID == 1)
  { 
    let collection = db.collection("dev");
    let data = await collection.find({}).toArray();
    res.send(data);
  }

  if(paramID == 2)
  {
    let collection = db.collection("testing");
    let data = await collection.find({}).toArray();
    res.send(data)
  }

  if(paramID == 3)
  {
    let collection = db.collection("quality assurance");
    let data = await collection.find({}).toArray();
    res.send(data)
  }

  if(paramID == 4)
  {
    let collection = db.collection("support");
    let data = await collection.find({}).toArray();
    res.send(data)
  }

  if(paramID == 5)
  {
    let collection = db.collection("back office");
    let data = await collection.find({}).toArray();
    res.send(data)
  }

}
            