// import module `mongoose`
const mongoose = require('mongoose');

// import module `user` from `../models/user/user.js`
const UserModel = require('./user/user.js');
const BookingModel = require('./user/booking.js');
const CardModel = require('./user/card.js');
const PaymentMethodModel = require('./user/paymentMethod.js');
const UserFileModel = require('./user/userFile.js');

// import module `location` from `../models/location/location.js`
const LocationModel = require('./location/location.js');
const MovieModel = require('./location/movie.js');
const ScheduleModel = require('./location/schedule.js');
const SeatModel = require('./location/seats.js');
const TimeModel = require('./location/time.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('./manager/manager.js');
const ManagerFileModel = require('./manager/managerFile.js');

// moviebookbooks is the name of the database
const url = 'mongodb://localhost:27017/moviebookbooks';

// additional connection options
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const database = {
  /*
        connects to database
    */
    connect: function () {
        mongoose.connect(url, options, function(error) {
            if(error) throw error;
            console.log('Connected to: ' + url);
        });
    },

    /*
        inserts a single `doc` to the database based on the model `model`
    */
    insertOne: function(model, doc, callback) {
        model.create(doc, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    /*
        inserts multiple `docs` to the database based on the model `model`
    */
    insertMany: function(model, docs) {
        model.insertMany(docs, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },

    /*
        searches for a single document based on the model `model`
        filtered through the object `query`
        limits the fields returned based on the string `projection`
        callback function is called after the execution of findOne() function
    */
    findOne: function(model, query, projection, callback) {
        model.findOne(query, projection, function(error, result) {
            if(error) return callback(false);
            return callback(result);
        });
    },

    /*
        searches for multiple documents based on the model `model`
        filtered through the object `query`
        limits the fields returned based on the string `projection`
        callback function is called after the execution of findMany() function
    */
    findMany: function(model, query, projection, callback) {
        model.find(query, projection, function(error, result) {
            if(error) return callback(false);
            return callback(result);
        });
    },

    /*
        updates the value defined in the object `update`
        on a single document based on the model `model`
        filtered by the object `filter`
    */
    updateOne: function(model, filter, update) {
        model.updateOne(filter, update, function(error, result) {
            if(error) return callback(false);
            console.log('Document modified: ' + result.nModified);
            return callback(true);
        });
    },

    /*
        updates the value defined in the object `update`
        on multiple documents based on the model `model`
        filtered using the object `filter`
    */
    updateMany: function(model, filter, update) {
        model.updateMany(filter, update, function(error, result) {
            if(error) return callback(false);
            console.log('Documents modified: ' + result.nModified);
            return callback(true);
        });
    },

    /*
        deletes a single document based on the model `model`
        filtered using the object `conditions`
    */
    deleteOne: function(model, conditions) {
        model.deleteOne(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    },

    /*
        deletes multiple documents based on the model `model`
        filtered using the object `conditions`
    */
    deleteMany: function(model, conditions) {
        model.deleteMany(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    }
}

module.exports = database;
