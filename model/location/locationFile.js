const mongoose = require('mongoose');

const locationFileSchema = mongoose.Schema({
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

const locationFileModel = mongoose.model('locationFiles', locationSchema);

module.exports = locationFileModel;
