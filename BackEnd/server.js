// create server
const express = require("express");
const app = express();
const port = 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server listening on port ${port}!`)
);
// global middelwares
const cors = require('cors')
app.use(express.json())
app.use(cors())

// connect to dataBase
const connectdb = require("./Config/connectDB");
connectdb();

// routes
const user = require("./Routes/userRoute")
const product = require("./Routes/productRoute")
const request = require("./Routes/request")
app.use("/user",user)
app.use("/product",product)
app.use("/request",request)

// Test router
app.get ("/test", (req,res)=>{
  res.status(200).send("test ecommerce page")
})






