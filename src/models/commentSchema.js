const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    review:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;