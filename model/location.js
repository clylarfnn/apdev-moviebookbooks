const mongoose = require('mongoose');
const internal = require('stream');

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
    }
});

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true
    },
    moviePoster: {
        type: String,
        required: true
    },
    movieBanner: {
        type: String,
        required: true
    },
    movieGenre1: {
        type: String,
        enum: ['Action','Adventure','Animation','Comedy','Drama','Fantasy','Romance']
    },
    movieGenre2: {
        type: String,
        enum: ['Action','Adventure','Animation','Comedy','Drama','Fantasy','Romance']
    },
    movieGenre3: {
        type: String,
        enum: ['Action','Adventure','Animation','Comedy','Drama','Fantasy','Romance']
    },
    movieDirector: {
        type: String,
        required: true
    },
    movieCast: {
        type: String,
        required: true
    },
    movieTrailer: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Available','Unavailable'],
        default: 'Available'
    }
});

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