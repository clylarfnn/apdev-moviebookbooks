const mongoose = require('mongoose');
const internal = require('stream');

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
    }
});

const paymentMethodSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    method: {
        type: String,
        enum: ['Cash','Credit Card','Debit Card'],
        default: 'Cash',
        required: true
    }
});

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

const bookingSchema = mongoose.Schema({
    bookingID: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    movieName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cinemaID: {
        type: Number,
        required: true
    },
    seatNo1: {
        type: Number,
        required: true
    },
    seatNo2: {
        type: Number,
        required: true
    },
    seatNo3: {
        type: Number,
        required: true
    },
    seatNo4: {
        type: Number,
        required: true
    },
    seatNo5: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});