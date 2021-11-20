const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    user:{
        type: String
    },
    avatar: {
        type: String
    },
    username: {
        type: String
    }
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;