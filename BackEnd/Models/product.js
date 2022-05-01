const {Schema, model} = require("mongoose");

const productSchema = new Schema({
    productName:{type:String, required: true},
    productCatégorie:{type:String },
    price : {type : Number, required: true},
    picproduct :{ type: String},
    Userupload: {
      type: Schema.Types.ObjectId,
          ref: 'UserCollection',
           required: true
  },
  favourite :{type: Boolean, default : false},
    date: { type: Date, default: Date.now },
});
module.exports = Product = model("ProductCollection", productSchema);