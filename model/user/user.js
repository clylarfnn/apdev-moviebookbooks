const mongoose = require('mongoose');
const internal = require('stream');
const bcrypt = require('bcrypt');
let SALT = 10;

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Female','Male','Non-Binary','Other'],
        default: 'N/A'
    },
    birthday: {
        type: Date,
        required: true
    },
    contactNum: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
        unique: true
    },
    pictureID: {
        type: Number,
        required: true,
        unique: true
    }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
