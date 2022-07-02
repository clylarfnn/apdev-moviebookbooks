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
const movieModel = require('../model/location/movie.js');

const movie_locationsController = {
    getMoviesPerLoc: function (req,res){
        //edit bc wala ga render ang pics hajkgfl
        var location = req.params.location 
        
        db.findMovieByLocation(location, async function(movies){
            const location = await movies;
          //  console.log("movies for the location " + location);
            res.render('moviesperloc', {location});
        });

    },

    getNowShowing: function (req, res){//only shows one movie so far lmaooo

        movieModel.find({}, function(err, movies){
            if(err)
            {
                console.log(err);
            }
            else
            {
                const allMovies =  movies;
                //console.log(allMovies);
                res.render("now-showing", {allMovies});
            }
        })
    }
}

module.exports = movie_locationsController;
