const mongoose = require("mongoose");
require("dotenv").config()

// local host connection
 const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_Local);
    console.log("db connected succesfully");
  } catch (error) {
    console.log(error);
  }
};

 
// conect with mongoDB Atlass 
{/*const connectdb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI_Atlas);
      console.log("db connected succesfully");
    } catch (error) {
      console.log(error);
    }
  }; */}
 

module.exports = connectdb;
