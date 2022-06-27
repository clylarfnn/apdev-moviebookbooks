const mongoose = require('mongoose');

const locationFileSchema = mongoose.Schema({
    fileID: {
        type: String,
        required: true,
        unique: true
    },
    fileName: {
        type: Number,
        required: true
    },
    fileType: {
        type: String,
        required: true
    }
});

const locationFileModel = mongoose.model('locationFiles', locationSchema);

module.exports = locationFileModel;
