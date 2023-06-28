const express= require('express');
const mongoose= require('mongoose');

const router= express.Router();

const ProductModel= mongoose.model('Product');

router.get("/",async (req,res)=>{
    try {
        const docs=await ProductModel.find().sort({price:-1});
        res.status(200).send(docs);
    } catch (error) {
        res.status(500).send({message:"Error Occured",error:error})
    }
    
})

router.post("/",async (req,res)=>{
    var product= new ProductModel();
    product.pname=req.body.pname;
    product.price=req.body.price;

    try {
        const doc=await product.save();
        res.status(200).send(doc);
    } catch (error) {
        res.status(500).send({message:"Error Occured",error:error})
    }
    
})

module.exports= router;