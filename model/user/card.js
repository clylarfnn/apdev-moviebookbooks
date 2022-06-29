const mongoose = require('mongoose');
const internal = require('stream');
const bcrypt = require('bcrypt');
let SALT = 10;

const cardSchema = mongoose.Schema({
    cardNum: {
        type: Number,
        required: true,
        unique: true
    },
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
    expiration: {
        type: Date,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true,
        unique: true
    },
    debitOrCredit: {
        type: String,
        enum: ['Debit','Credit'],
        required: true
    }
});

const cardModel = mongoose.model('cards', cardSchema);

module.exports = cardModel;
