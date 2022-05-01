const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerCheck, validator, loginCheck } = require("../tools/validator");
const { register } = require("../controllers/userController");
const isAuth = require("../middlewares/passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../models/product");
require("dotenv").config();
const adminId = process.env.ADMIN_ID;

// register user
router.post("/register", registerCheck(), validator, register);

// login user
router.post("/login", loginCheck(), validator, async (req, res) => {
  //destructing for request body 
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    // validate exist user
    if (!findUser) {
      return res.status(400).send({ msg: "check your mail" });
    }
    // bcrypt check password
    const matched = await bcrypt.compare(password, findUser.password);
    if (!matched) {
      return res.status(400).send({ msg: "check your information" });
    }
// payload of token element
    const payload = {
      _id: findUser._id,
      success: true,
    };

    findUser.password = undefined;
    // create token 
    const token = await jwt.sign(payload, process.env.privateKey);
    res.status(200).send({
      user: {
        email: findUser.email,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        id: findUser._id,
      },
      token: `Bearer ${token}`,
      msg: "user successfuly connected",
    });
  } catch (error) {
    res.status(400).send({ msg: "fail to connect" });
  }
});

//get user details
router.get("/current/", isAuth(), (req, res) => {
  res.send({ user: req.user });
});

//update user details
router.post("/update/:id", async (req, res) => {
  const newUser = req.body;
  try {
    // fnd user
    const existUser = await User.findOne({ _id: req.params.id });
    if (!existUser) {
      // conditin exisen user
      return res.status(400).send({ msg: "no user with this id" });
    }
    // update user information
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: newUser }
    );
    const newuser = await User.findOne({ _id: req.params.id });
    const newuser1 = {...newuser._doc , password : null}
    if (result.modifiedCount == 1) {
      // check similar information
      
      return res
        .status(200)
        .send({ msg: "you successfully update your profile", user: newuser1 });
    } else {
      return res.status(200).send({ msg: "your account already upload" , user: newuser1});
    }
  } catch (error) {
    return res.status(400).send({ msg: "error "});
  }
});

// change user password
router.post("/password/:id", async (req, res) => {
  try {
    const oldpassword = req.body.oldpassword;

    // Find user by id
    const existuser = await User.find({ _id: req.params.id });

    // Check if user exists
    if (!existuser) {
      return res.status(400).send({ msg: "Username not found" });
    }

    const newpassword = req.body.password;
    const repeatpassword = req.body.password2;
    if (newpassword !== repeatpassword) {
      return res.status(400).send({ msg: "your password not much" });
    }
    if (oldpassword == newpassword) {
      return res
        .status(400)
        .send({ msg: "current password and new pasword are the same" });
    } else {
      // hash password

      const hashedPassword = await bcrypt.hash(newpassword, 10);
      const result = await User.updateOne(
        { _id: req.params.id },
        { $set: { password: hashedPassword } }
      );
      if (result.modifiedCount == 1) {
        return res.status(200).send({ msg: "seccess change password" });
      }
      return res.status(400).send({ msg: "cant save" });
    }
  } catch (error) {
    return { msg: error };
  }
});

// add a product to the favourite list
router.post("/favproduct/:id", async (req, res) => {
  
  try {
    const userid = req.body.id;
    // check user information
    const updUser = await User.findOne({ _id: userid });
    if (!updUser) {
      return res.status(400).send({ msg: "check your log in information" });
    }
    // check product information
    const prod = await Product.findOne({ _id: req.params.id });
    if (!prod) {
      return res.status(400).send({ msg: "check the product information" });
    }
    
    const fav = updUser.favProd;
    const favs = updUser.favProds;
    // first condition : empty list favurite product
    if (fav.length == 0) {
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { favProd: [req.params.id], favProds: [prod],  } }
      );
     
      return res
        .status(200)
        .send({
          msg: " your first poduct add succesflly",
          user: { ...updUser._doc, favProd: [req.params.id], favProds: [prod] },
        });
    }
    const newfav = fav.filter((f) => f == req.params.id);
    const newfavs = favs.filter((f) => f._id == req.params.id);
    // second condition : exist => remove from list
    if (newfav.length != 0) {
      const remfav = fav.filter((f) => f != req.params.id);
      const remfavs = favs.filter((f) => f._id != req.params.id);
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { favProd: remfav , favProds: remfavs } }
      );
      return res
        .status(200)
        .send({
          msg: "product removed from your favorite list",
          user: { ...updUser._doc, favProd: remfav, favProds: remfavs },
        });
    } else {
      // last condition : not exist => add to list
      const addfav = fav;
      const addfavs = favs;
      addfav.push(`${req.params.id}`);
      addfavs.push(prod);
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { favProd: addfav, favProds: addfavs } }
      );
      return res
        .status(200)
        .send({
          msg: "product add from your favorite list",
          user: {... updUser._doc, favProd: addfav, favProds: addfavs },
        });
    }
  } catch (error) {
    return res.status(400).send({ msg: "error" });
  }
});

// add a product to the payment list
router.post("/payproduct/:id", async (req, res) => {
  
  try {
    const userid = req.body.id;
    // check user information
    const updUser = await User.findOne({ _id: userid });
    if (!updUser) {
      return res.status(400).send({ msg: "check your log in information" });
    }
    // check product information
    const prod = await Product.findOne({ _id: req.params.id });
    if (!prod) {
      return res.status(400).send({ msg: "check the product information" });
    }
    
    const fav = updUser.payProd;
    const favs = updUser.payProds;
    // first condition : empty list favurite product
    if (fav.length == 0) {
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { payProd: [req.params.id], payProds: [prod],  } }
      );
     
      return res
        .status(200)
        .send({
          msg: " your first poduct add succesflly",
          user: { ...updUser._doc, payProd: [req.params.id], payProds: [prod] },
        });
    }
    const newfav = fav.filter((f) => f == req.params.id);
    const newfavs = favs.filter((f) => f._id == req.params.id);
    // second condition : exist => remove from list
    if (newfav.length != 0) {
      const remfav = fav.filter((f) => f != req.params.id);
      const remfavs = favs.filter((f) => f._id != req.params.id);
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { payProd: remfav , payProds: remfavs } }
      );
      return res
        .status(200)
        .send({
          msg: "product removed from your payment list",
          user: { ...updUser._doc, payProd: remfav, payProds: remfavs },
        });
    } else {
      // last condition : not exist => add to list
      const addfav = fav;
      const addfavs = favs;
      addfav.push(`${req.params.id}`);
      addfavs.push(prod);
      const newUser = await User.updateOne(
        { _id: userid },
        { $set: { payProd: addfav, payProds: addfavs } }
      );
      return res
        .status(200)
        .send({
          msg: "product add from your payment list",
          user: {... updUser._doc, payProd: addfav, payProds: addfavs },
        });
    }
  } catch (error) {
    return res.status(400).send({ msg: "error" });
  }
});

// get all users
router.get("/admin/current/:id", async (req, res) => {
  try {
    if(req.params.id != adminId)
{return res.status(401).send({msg : "not authorize"}) }
const result = await User.find()
 return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({ msg: "error" });

  }

});

// multer router
const multer  = require('multer')
const upload = multer({ dest: '../../ecomtempl/public/uploads' })
router.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})



module.exports = router;
