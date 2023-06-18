const mongoose = require('mongoose');

const schema = mongoose.Schema;

let UserModel = new schema({
    fname: {
        type: String,
        required: true,
        max: 100
    },
    lname: {
        type: String,
        required: true,
        max: 100
    },
    ename: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 100
    }

})

module.exports= mongoose.model('UserModel',UserModel)