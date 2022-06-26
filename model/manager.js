const mongoose = require('mongoose');
const internal = require('stream');

const userSchema = mongoose.Schema({
    managerID: {
        type: Number,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
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
        default: 'N/A',
        required: true
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
});