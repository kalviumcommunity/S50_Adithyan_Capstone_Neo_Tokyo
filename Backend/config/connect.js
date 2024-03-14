require('dotenv').config();
const mongoose = require("mongoose");

const connectDb = async (URL) => {
    try {
        
        await mongoose.connect(URL);
        console.log("DB connected successfully");
       
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = connectDb;