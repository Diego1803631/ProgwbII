const mongoose = require('mongoose');
const userlikesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie"
    }]
});

const Userlikes = mongoose.model('userlikes', userlikesSchema);
module.exports = Userlikes;