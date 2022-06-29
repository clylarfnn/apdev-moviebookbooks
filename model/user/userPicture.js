const mongoose = require('mongoose');

const userPictureSchema = mongoose.Schema({
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

const userPictureModel = mongoose.model('userPictures', userPictureSchema);

module.exports = userPictureModel;