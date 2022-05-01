const express = require("express");
const router = express.Router();
const Request = require("../models/request");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const isAuth = require("../middlewares/passport");
const User = require("../models/User");
const validateIssusInput = require("../validation/issus");
require("dotenv").config();
const adminId = process.env.ADMIN_ID;

// post a request (from users)
router.post("/contact/:id", async(req, res) => {
try {
  let to = mongoose.Types.ObjectId(req.params.id)
  let passwords = req.body.password
  let email = req.body.email
  if (!passwords) {
    return res.status(400).send({msg : "enter your password"});
  }
      // Form validation
      const { errors, isValid } = validateIssusInput(req.body);
      // Check validation
      if (!isValid) {
        return res.status(400).send({msg :errors});
      }
      // find user 
      const user = await User.findOne({_id: req.params.id})

      // check user auth
      if (user == null ) {return res.status(400).send({msg : "can't send"})}
      
      // bcrypt check password
    const matched = await bcrypt.compare(passwords, user.password);
    if (!matched) {
      return res.status(400).send({ msg: "password incorrect" });
    }
    if (email !== user.email) {
      return res.status(400).send({ msg: "not auth" });
    }
        // save new request
          const newReq = new Request({
            username: req.body.username,
            email: req.body.email,
            body: req.body.body,
            name: req.body.name,
            from :to
          });
         await newReq.save()
          return  res.status(200).send({ msg: "successfully send request" })
} catch (err) {
  console.log(err)
 return res.status(400).send({ msg: err })

}
});

// get myrequest
router.get("/myrequest/:id", async (req, res) => {
  var myreq =[]
  const d =req.params.id
  try{
    const requests=  await Request.find()
    if (requests == []) {
      return res.status(400).send({ msg: "no request get" });
    }
     requests.map(r=>{if(r.from == d) { myreq.push(r)}} )
    return res.status(200).send(myreq);
    
  } catch (error) {
    return res.status(400).send({ message: error })
  }
});

// get request from admin
router.get("/contact/:id", async (req, res) => {
  try {if (req.params.id != adminId) {
    return res.status(401).send({ msg: "cannot get all users" });
  }
    const requests=  await Request.find()
    if (requests == {}) {
      return res.status(400).send({ msg: "no request get" });
    }
    return res.status(200).send(requests);
  } catch (error) {
    return res.status(400).send({ message: error })
  }

});

// delate my request 
router.delete("/myrequest/:id",  async (req, res) => {
  try {
    console.log(req.params.id)
    const request = await Request.findOne({_id: req.params.id})
    if (!request){
      return res.status(400).send({msg : "request dont exist"})
    }
const result = await Request.deleteOne({_id: req.params.id} )
console.log(result)
const myRequest =  await Request.find({from : req.params.id})
if (result.deletedCount == 1) {
  return res.status(200).send({ msg: "request success delated"});
}
return   res.status(200).send({ msg: "request already delated" });
} catch (error) {
  console.log(error)
    return res.status(400).send({ msg: "error" })
  }
})

// delate request from admin
router.delete("/contact/:id",  async (req, res) => {
  try {
    if (req.params.id != adminId) {
    return res.status(401).send({ msg: "you can't delate requests" });
  }

const requests = await Request.findOne({id: req.body.reqId})
if (!requests) {
  return res.status(400).send({ msg: "request not found" });
}
const result = await Request.findByIdAndRemove({id: req.body.reqId})
console.log(result)
return   res.status(200).send({ msg: "request success delated" });
} catch (error) {
  console.log(error)
    return res.status(400).send({  error })
  }
})

// chec request from admin
router.post("/admin/request/:id",  async (req, res) => {
  try {
    if (req.params.id != adminId) {
    return res.status(401).send({ msg: "you can't delate requests" });
  }

const requests = await Request.findOne({id: req.body.reqId})
if (!requests) {
  return res.status(400).send({ msg: "request not found" });
}
const result = await Request.updateOne({id: req.body.reqId},
  { $set: {check :true}   })
console.log(result)
if (result.modifiedCount == 1 ){
return   res.status(200).send({ msg: "request success checked" });
}
return   res.status(200).send({ msg: "request  dy checked" });
} catch (error) {
  console.log(error)
    return res.status(400).send({  error })
  }
})

module.exports = router;
