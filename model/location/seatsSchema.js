const mongoose = require('mongoose');

const seatsSchema = mongoose.Schema({
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

//THIS IS A SCHEMA, NOT A MODEL
module.exports = seatsSchema;
