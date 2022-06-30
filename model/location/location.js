const mongoose = require('mongoose');

const seatingSchema = mongoose.Schema({
    seatName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Available','Unavailable'],
      default: 'Available'
    }
});

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
    },
    seats: {
      type: [seatingSchema],
      required: true
    }
});

const locationModel = mongoose.model('locations', locationSchema);

module.exports = locationModel;
