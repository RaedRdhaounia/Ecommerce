const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const mongoose = require("mongoose")
require("dotenv").config();

// get all products
router.get("/all", async (req, res) => {
  try {
    const Allproducts = await Product.find();
    if (!Allproducts) {
      return res.status(200).send({ msg: "there is no product post for now" });
    }
    return res
      .status(200)
      .send({ Allproducts, msg: "this all the product we find" });
  } catch (error) {
    return res.status(400).send({ msg: error });
  }
});

// post a product 
router.post("/newproduct/:id", async (req, res)=>{
  let Userupload = mongoose.Types.ObjectId(req.params.id)
  let productName = req.body.productName
  let price = req.body.price
  let productCatégorie = req.body.productCatégorie
    try {
       const newProduct =  Product({Userupload, productName, price, productCatégorie } )
       const result = await newProduct.save()
       console.log(result)
      return  res.status(200).send({ post : newProduct , msg : "success upload your product"})
    } catch (error) {
      console.log(error)
      return   res.status(400).send({msg : `sorry check your indormation ${error}`})
    }
})

// get my products 
router.get("/myproduct/:id", async (req, res) => {
  try {
    const Allproducts = await Product.find({Userupload: req.params.id});
    if (!Allproducts) {
      return res.status(200).send({ msg: "there is no product post for now" });
    }
    return res
      .status(200)
      .send({ Allproducts, msg: "this all the product we find" });
  } catch (error) {
    return res.status(400).send({ msg: error });
  }
});


module.exports = router;


