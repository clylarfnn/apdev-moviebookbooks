const mongoose = require('mongoose');

const seatsSchema = mongoose.Schema({
    seatName: {
        type: Number,
        required: true
    },
    cinemaID: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Available','Unavailable'],
        default: 'Available'
    },
    price: {
        type: Number,
        required: true
    }
});

const seatsModel = mongoose.model('seats', seatsSchema);

module.exports = seatsModel;
