const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    cinemaID: {
        type: Number,
        required: true,
        unique: true
    },
    cinemaNum: {
        type: String,
        required: true
    }
});

const locationModel = mongoose.model('locations', locationSchema);

module.exports = locationModel;
