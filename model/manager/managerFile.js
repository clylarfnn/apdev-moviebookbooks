const mongoose = require('mongoose');

const managerFileSchema = mongoose.Schema({
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

const managerFileModel = mongoose.model('managerFiles', locationSchema);

module.exports = managerFileModel;