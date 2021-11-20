const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
        type: String,
        ref: "user"
    },
    movie:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie"
    }]
});

const List = mongoose.model('list', listSchema);
module.exports = List;