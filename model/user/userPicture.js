const mongoose = require('mongoose');

const userPictureSchema = mongoose.Schema({
    pictureID: {
        type: Number,
        required: true,
        unique: true
    },
    PictureName: {
        type: String,
        required: true
    },
    PictureType: {
        type: String,
        required: true
    }
});

const userPictureModel = mongoose.model('userPictures', locationSchema);

module.exports = userPictureModel;