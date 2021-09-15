const mongoose = require('mongoose');
const platformSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

const Platform = mongoose.model('platform', platformSchema);
module.exports = Platform;