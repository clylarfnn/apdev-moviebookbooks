const mongoose = require('mongoose');

const managerPictureSchema = mongoose.Schema({
    pictureID: {
        type: Number,
        required: true,
        unique: true
    },
    pictureName: {
        type: String,
        required: true
    },
    pictureType: {
        type: String,
        required: true
    }
});

const ManagerPictureModel = mongoose.model('managerPictures', managerPictureSchema);

module.exports = ManagerPictureModel;