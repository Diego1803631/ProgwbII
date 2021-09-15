const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

const Review = mongoose.model('review', reviewSchema);
module.exports = Review;