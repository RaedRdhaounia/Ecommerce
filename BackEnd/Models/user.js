const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName:{type:String },
  lastName:{type:String },
  email: { type: String, required: true},
  password :{
    type :String, required:true
  },
  age :Number,
  gender : String,
  about : String,
  categ:[String],
  locaion :{country: String, city: String, codezip: Number, adress : String, region : String},
  resume :String,
  pic : String,
  favProd:[String],
  favProds :{type :[Object], default : []},
  payProd:[String],
  payProds :{type :[Object], default : []},
  date: { type: Date, default: Date.now },
  role : { type: String, default: "user" }
});
module.exports = User = mongoose.model("UserCollection", userSchema);