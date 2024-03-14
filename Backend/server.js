const express = require("express");
require('dotenv').config();
const port = process.env.port;
const connectDb = require("./config/connect"); 
const app = express();

const cors = require('cors');

app.use(cors());

const MONGO = process.env.MONGO_URI;

connectDb(MONGO);

app.get('/ping', (req,res)=>{
    res.send("Message: Pong")
})


app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);  
});

module.exports = app;