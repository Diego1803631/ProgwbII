const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie"
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
    user: {
        type: String
    },
    avatar: {
        type: String
    },
    username: {
        type: String
    }
});

const Review = mongoose.model('review', reviewSchema);
module.exports = Review;