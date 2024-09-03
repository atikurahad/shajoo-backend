const  mongoose = require('mongoose');

const ProductsData = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
    
})

const ProductModel = mongoose.model("products",ProductsData);
module.exports= ProductModel;