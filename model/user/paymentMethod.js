const mongoose = require('mongoose');

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

const paymentMethodModel = mongoose.model('paymentMethods', paymentMethodSchema);

module.exports = paymentMethodModel;
