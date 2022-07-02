const db = require('../model/db.js');
// import module `location` from `../models/location/location.js`
const LocationModel = require('../model/location/location.js');
const MovieModel = require('../model/location/movie.js');
const ScheduleModel = require('../model/location/schedule.js');
const SeatModel = require('../model/location/seats.js');
const TimeModel = require('../model/location/time.js');
const MovieFileModel= require('../model/location/movieFile.js');

// import module `user` from `../models/user/user.js`
const UserModel = require('../model/user/user.js');
const BookingModel = require('../model/user/booking.js');
const CardModel = require('../model/user/card.js');
const PaymentMethodModel = require('../model/user/paymentMethod.js');
const UserPictureModel = require('../model/user/userPicture.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('../model/manager/manager.js');
const ManagerPictureModel = require('../model/manager/managerPicture.js');

const movie_locationsController = {
    getMoviesPerLoc: function (req,res){
       // res.render('moviesperloc');
        //might need to use locationmodel and moviemodel
        //use findMovieByLocation?? check movieController and/or db.js for ref
        //make partial for movies per loc page  
        //https://stackoverflow.com/questions/32264225/how-to-get-multiple-document-using-array-of-mongodb-id
        //https://www.cloudhadoop.com/handlebarjs-iteration-objects/
        
        //find a way to figure out the location awsjklgh
        db.findMovieByLocation("Manila City", async function(movies){
            const location1 = await movies;
            console.log("MOVIES for location1 " + location1);
            res.render('moviesperloc', {location1});//may issue here, http error and cant find the handlebar
        });
        db.findMovieByLocation("Bacolod City", async function(movies){
            const location2 = await movies;
            console.log("MOVIES for location2 " + location2);
         });
         
    
    }
}

module.exports = movie_locationsController;
