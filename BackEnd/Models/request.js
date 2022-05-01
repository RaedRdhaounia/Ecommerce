const {Schema, model} = require("mongoose");


// Create Schema for Request
const RequestSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
    email : {
        type: String,
    },
    body:{
        type : String,
        
    },
    name:{
        type : String
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'UserCollection',
    },
    check:{
        type : Boolean,
        default:false
    },
});

module.exports = request = model('RequestCollection', RequestSchema);