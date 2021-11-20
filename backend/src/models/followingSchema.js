const mongoose = require('mongoose');
const followingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]

});

const Following = mongoose.model('following', followingSchema);
module.exports = Following;