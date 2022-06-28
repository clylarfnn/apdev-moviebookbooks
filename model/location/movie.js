const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true
    },
    moviePoster: {
        type: String,
        required: true,
        unique: true
    },
    movieBanner: {
        type: String,
        required: true,
        unique: true
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
    },
    locations: {
      type: [String]
    }
});

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;
