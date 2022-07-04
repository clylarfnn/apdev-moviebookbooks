const mongoose = require('mongoose');
var seatsSchema = require('./seatsSchema');
// const seatingSchema = mongoose.Schema({
//     seatName: {
//       type: String,
//       required: true
//     },
//     status: {
//       type: String,
//       enum: ['Available','Unavailable'],
//       default: 'Available'
//     }
// });

const timeFormatSchema = mongoose.Schema({
  hour: {
      type: Number,
      required: true,
  },
  minute: {
      type: Number,
      required: true,
  },
  period: {
    type: String,
    enum: ['AM', 'PM']
  }
});

const viewingSchema = mongoose.Schema({
    viewDate: {
        type: Date
    },
    viewTime: {
        type: timeFormatSchema
    },
    seats: {
        type: [{seatName: String, status: String}]
    }
});

const scheduleSchema = mongoose.Schema({
    cinemaID: {
        type: Number,
        required: true
    },
    movieName: {
        type: String,
        required: true
    },
    timeID: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    viewingSched: {
        type: viewingSchema
    }
});

const scheduleModel = mongoose.model('schedules', scheduleSchema);

module.exports = scheduleModel;
