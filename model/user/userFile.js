const mongoose = require('mongoose');

const userFileSchema = mongoose.Schema({
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

const userFileModel = mongoose.model('userFiles', userFileSchema);

module.exports = userFileModel;
