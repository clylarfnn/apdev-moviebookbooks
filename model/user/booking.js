const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
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
    seats: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['done', 'not done'],
        required: true
    }
});

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel;
