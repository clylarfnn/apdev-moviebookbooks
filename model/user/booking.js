const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    bookingID: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    movieName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cinemaID: {
        type: Number,
        required: true
    },
    seatNo1: {
        type: Number,
        required: true
    },
    seatNo2: {
        type: Number,
        required: true
    },
    seatNo3: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel;
