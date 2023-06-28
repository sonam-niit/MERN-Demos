const mongoose= require('mongoose');

let ProductSchema= new mongoose.Schema({
    pname:{
        type:String,
        required:true,
        max:100
    },
    price:{
        type:Number,
        required:true
    }
})

//export Model
module.exports= mongoose.model('Product',ProductSchema);