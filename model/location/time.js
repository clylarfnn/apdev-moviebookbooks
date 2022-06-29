const mongoose = require('mongoose');

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

const timeSchema = mongoose.Schema({
    timeID: {
        type: Number,
        required: true,
        unique: true
    },
    startTime: {
        type: timeFormatSchema,
        required: true,
        unique: true
    },
    endTime: {
        type: timeFormatSchema,
        required: true,
        unique: true
    }
});

const timeModel = mongoose.model('times', timeSchema);

module.exports = timeModel;
