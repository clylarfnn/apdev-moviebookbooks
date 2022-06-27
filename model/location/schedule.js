const mongoose = require('mongoose');

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
    }
});

const scheduleModel = mongoose.model('schedules', scheduleSchema);

module.exports = scheduleModel;
