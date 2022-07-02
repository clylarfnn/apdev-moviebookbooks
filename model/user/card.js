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
        enum: ['BDO','BPI','Metrobank'],
        required: true
    },
    cardType: {
        type: String,
        enum: ['VISA','Mastercard'],
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    debitOrCredit: {
        type: String,
        enum: ['Debit','Credit'],
        required: true
    }
});

const CardModel = mongoose.model('cards', cardSchema);

module.exports = CardModel;
