const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required:true
    },
    lastname:{
        type: String, 
        required:true
    },
    username:{
        type: String, 
        required: true,
        maxlenght: 30,
        unique: true
    },
    type:{
        type: Boolean,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlenght: 8,
        unique: true
    },
    age:{
        type: Number
    },
    photo:{
        type: String,
        default: ''
    },
    cover:{
        type: String,
        default: ''
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;