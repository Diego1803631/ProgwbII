const mongoose = require('mongoose');
const followersSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
});

const Followers = mongoose.model('followers', followersSchema);
module.exports = Followers;