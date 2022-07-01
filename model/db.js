// import module `mongoose`
const mongoose = require('mongoose');

// import module `user` from `../models/user/user.js`
const UserModel = require('./user/user.js');
const BookingModel = require('./user/booking.js');
const CardModel = require('./user/card.js');
const PaymentMethodModel = require('./user/paymentMethod.js');
const UserPictureModel = require('./user/userPicture.js');

// import module `location` from `../models/location/location.js`
const LocationModel = require('./location/location.js');
const MovieModel = require('./location/movie.js');
const ScheduleModel = require('./location/schedule.js');
const SeatModel = require('./location/seats.js');
const TimeModel = require('./location/time.js');
const MovieFileModel= require('./location/movieFile.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('./manager/manager.js');
const ManagerPictureModel = require('./manager/managerPicture.js');

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
    deleteOne: function(model, conditions, callback) {
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
    deleteMany: function(model, conditions, callback) {
        model.deleteMany(conditions, function (error, result) {
            if(error) return callback(false);
            console.log('Document deleted: ' + result.deletedCount);
            return callback(true);
        });
    },

    /*
      finds movies by location
    */
    findMovieByLocation: async function(locationName, callback) {
      try {
        //returns array of cinemaIDs where the location is `locationName`
        // const cinemaID = await LocationModel.where("location").equals(locationName).select("cinemaID");
        const cinemaID = await MovieModel.find({locations: locationName});
        console.log(cinemaID);
        // const movielist = await ScheduleModel.find({cinemaID: { $elemMatch: cinemaID}});
        // const movielist = await ScheduleModel.find({$in: cinemaID.params.cinemaID});
        // const movieList = await ScheduleModel.where("cinemaID").equals({$in: cinemaID}).select("movieName");
        // console.log(movielist);

        return callback(cinemaID);
      } catch (e) {
        console.log(e);
        return callback(false);
      }
    },

    findMovie: async function (movieName, callback) {
      console.log(movieName);
      try{
        // const movie = await MovieModel.findOne({movieName: movieName});
        const movie = await MovieModel.where("movieName").equals(movieName);
        console.log("found: " + movie);

        return callback(movie);
      }
      catch (e) {
        console.log(e);
        return callback(false);
      }
    },

    findMovieSched: async function (movieName, callback) {
      try{
        const schedule = await ScheduleModel.where("movieName").equals(movieName);
        console.log("found: " + schedule);

        return callback(schedule);
      }catch (e){
        console.log(e);
        return callback(false);
      }
    },

    findTimeSched: async function(timeIDs, callback) {
      try {
        const time = await TimeModel.where("timeID").equals({$in: timeIDs});
        // console.log(time);

        return callback(time);
      }catch (e){
        console.log(e);
        return callback(false);
      }
    },

    findCinema: async function(cinemaIDs, callback) {
      try {
        const cinema = await LocationModel.where("cinemaID").equals({$in: cinemaIDs});
        // console.log(time);

        return callback(cinema);
      }catch (e){
        console.log(e);
        return callback(false);
      }
    },

    findNullViews: async function (callback) {
      try{
        const sched = await ScheduleModel.find({cinemaID: {$exists:true}, viewingSched: null})
        // console.log("looking")
        // console.log(sched)
        return callback(sched);
      }
      catch(e){
        console.log(e);
        return callback(false);
      }
    },

    findTimeID: async function (timeID, callback) {
      // const time = await TimeModel.where("timeID").equals(timeID)
      const time = await TimeModel.findOne({timeID: timeID})
      // console.log(time)
      return callback(time)
    },

    findViewTimes: async function (query, callback) {
      try{
        const cinemaID = query.cinemaID
        const date = query.date
        // console.log(cinemaID)
        // console.log(date)
        const times = await ScheduleModel.find({cinemaID: cinemaID, "viewingSched.viewDate": date},{"viewingSched.viewTime": 1, _id:0})
        console.log("finding for " + date)
        console.log(JSON.stringify(times))
        // console.log(times[0])
        callback(times)
      }
      catch (e) {
        console.log(e);
        return callback(false);
      }

    }

}

module.exports = database;
