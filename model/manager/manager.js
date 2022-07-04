const mongoose = require('mongoose');
const internal = require('stream');
const bcrypt = require('bcrypt');
let SALT = 10;

const managerSchema = mongoose.Schema({
    username: {
        type: String,
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
    picture: {
        type: String,
        required: true,
        unique: true
    }
});

managerSchema.pre('save', function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT, (err, salt)=>{
            if(err) return next(err)

            bcrypt.hash(user.password, salt, (err, hash)=>{
                if(err) return next(err)
                user.password = hash;
                next();
            })
        })
    }
    else{
        next();
    }
})

managerSchema.methods.comparePassword = function(possiblePassword, checkpassword){
    bcrypt.compare(possiblePassword, this.password, (err, isMatch)=>{
        if(err) return checkpassword(err)
        checkpassword(null, isMatch)
    })
}

const ManagerModel = mongoose.model('managers', managerSchema);

module.exports = ManagerModel;
