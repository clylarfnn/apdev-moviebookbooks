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
        db.findOne(MovieModel, {_id: id}, {}, async function (result){
          const moviedetails = await result;
          console.log(moviedetails);

          var movieName = moviedetails.movieName;


          // res.send()
          res.render('movie-details', {title: movieName, moviedetails: moviedetails});
        });

      },

      getSchedule: function (req, res) {

        var movieName = req.query.movie;
        var times;
        var allTime;
        var allCinemas;
        var schedule;

        // get the schedule of the movie
        db.findMovieSched(movieName, async function (result) {
          schedule = await result;
          console.log("SCHEDULE: " + schedule);
          // get time IDs array
          db.findMany(ScheduleModel, {movieName: movieName}, {timeID: 1, _id:0}, async function (result) {
            times = await result;
            console.log(times);
            movieController.getTimesDetails(times, function (time_res) {
              allTime = time_res;
              console.log(typeof allTime)
              console.log("TIME ARRAY: " + allTime);
              console.log("length: " + allTime.length);
            });
            // get cinemaIDs array
            db.findMany(ScheduleModel, {movieName: movieName}, {cinemaID: 1, _id:0}, async function (result) {
              cinemas = await result;
              console.log(cinemas);
              movieController.getCinemaDetails(cinemas, function (cinema_res) {
                allCinemas = cinema_res;
                console.log("CINEMA ARRAY: " + allCinemas);
                console.log("length: " + allCinemas.length);

                console.log(allTime)

                var data = {
                  times: allTime,
                  cinemas: allCinemas,
                  schedule: schedule
                }

                res.send(data);
              });
            });
          });
        });


      },

      getAvailableSeats: function (req, res) {
        var cinemaID = req.query.cinemaID;
        console.log("in controller");
        console.log(cinemaID)
        db.findMany(LocationModel, {cinemaID: cinemaID, 'seats.status': 'Available'}, {seatName: 1, _id:0}, async function (result) {
          const availSeats = await result;
          console.log(availSeats)
        });
        // res.send({cinemaID: cinemaID})
      },

      getCinemaDetails: function (res, callback) {
        var array = [];
        // console.log("temp : " + array);
        return new Promise(resolve =>
        {
          var i = res.length; //get length of time array
          if  (i > 0)
          {
              for (var cinemaID of res)
              {
                  const cinema = cinemaID
                  // console.log(time)
                  db.findCinema(cinema.cinemaID, async function(result)
                  {
                    const fullCinema = result;
                    array.push(fullCinema);
                      i--;
                      if (i <= 0) {
                        return callback(array);
                        resolve();
                      }
                  })
              }
          }
          else resolve();
          });
      },

      getTimesDetails: function (res, callback) {
        var array = [];
        // console.log("temp : " + array);
        return new Promise(resolve =>
        {
          var i = res.length; //get length of time array
          if  (i > 0)
          {
              for (var timeID of res)
              {
                  const time = timeID
                  // console.log(time)
                  db.findTimeSched(time.timeID, async function(result)
                  {
                    const fullTime = result;
                    array.push(fullTime)
                      i--;
                      if (i <= 0) {
                        return callback(array);
                        resolve();
                      }
                  })
              }
          }
          else resolve();
          });
      }

}

module.exports = movieController;
