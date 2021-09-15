const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    score: {
        type: Number
    },
    image: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    releasedate: {
        type: Date,
        required: true
    },
    episodes: {
        type: Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    platform:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "platform"
    }
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;