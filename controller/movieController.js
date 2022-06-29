// controls processes related to movie details
const db = require('../model/db.js');
const LocationModel = require('../model/location/location.js');
const MovieModel = require('../model/location/movie.js');
const ScheduleModel = require('../model/location/schedule.js');
const SeatModel = require('../model/location/seats.js');
const TimeModel = require('../model/location/time.js');
const MovieFileModel= require('../model/location/movieFile.js');

const movieController = {
      /*
          executed when the client sends an HTTP GET request `/movie-details/:movieName`
          as defined in `../routes/routes.js`
      */
      getMovieDetails: function (req, res) {
        var id = req.params.id;
        console.log(id);
        console.log("getMovieDetails");

        db.findOne(MovieModel, {_id: id}, {}, async function (result){
          // console.log(result)
          try{
            if (result){
              console.log("DONE");
              const moviedetails = await result;
              console.log(moviedetails);
              res.render('movie-details', {title: moviedetails.movieName, moviedetails: moviedetails});
              // res.send('In movie details');
            }
          } catch (e) {
            console.log(e)
          }
        });

      }

}

module.exports = movieController;
