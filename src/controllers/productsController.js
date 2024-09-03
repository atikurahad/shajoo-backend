
const Product  = require("../models/productModel")
const {v4: v4uuid}= require('uuid')


const createProduct = async(req,res)=>{
try {
    
    const newProduct = new Product({
        id:v4uuid(),
        title:req.body.title,
        price: Number(req.body.price),
        description:req.body.description
    });
    await newProduct.save();

    res.staus(201).json(newProduct)
} catch (error) {
    res.staus(400).json(error.message)
}

}


module.exports = {createProduct}