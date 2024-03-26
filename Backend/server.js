const express = require("express");
require('dotenv').config();
const port = process.env.PORT || 3000;
const connectDb = require("./config/connect"); 
const app = express();
const userrouter = require("./Routes/userRoute")
const cors = require('cors')

app.use(cors());

const MONGO = process.env.MONGO_URI;

connectDb(MONGO);

app.get('/ping', (req,res)=>{
    res.send("Message: Pong")
})

app.use(express.json())

app.use("/",userrouter)

app.listen(port, () => {
  console.log(`🚀 Server running on PORT: ${port}`);  
});

module.exports = app;
