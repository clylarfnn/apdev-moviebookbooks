// controls processes related to movie details
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
        //test text
        res.send('In movie details');
      }
}

module.exports = movieController;
