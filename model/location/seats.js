const mongoose = require('mongoose');
var seatsSchema = require('./seatsSchema');

// const seatsSchema = mongoose.Schema({
//   seatName: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['Available','Unavailable'],
//     default: 'Available'
//   }
// });

const seatsModel = mongoose.model('seats', seatsSchema);

module.exports = seatsModel;
