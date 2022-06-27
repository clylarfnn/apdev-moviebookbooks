const mongoose = require('mongoose');

const movieFileSchema = mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        unique: true
    },
    fileType: {
        type: String,
        required: true
    }
});

const movieFileModel = mongoose.model('movieFiles', movieFileSchema);

module.exports = movieFileModel;
