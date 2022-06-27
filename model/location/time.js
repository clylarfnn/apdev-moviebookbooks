const mongoose = require('mongoose');

const timeSchema = mongoose.Schema({
    timeID: {
        type: Number,
        required: true,
        unique: true
    },
    startTime: {
        type: Time,
        required: true,
        unique: true
    },
    endTime: {
        type: Time,
        required: true,
        unique: true
    }
});

const timeModel = mongoose.model('times', timeSchema);

module.exports = timeModel;
