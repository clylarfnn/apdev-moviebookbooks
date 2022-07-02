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
      // getMovieDetails: function (req, res) {
      //   var id = req.params.id;
      //   console.log(id);
      //   console.log("getMovieDetails");
      //
      //   db.findOne(MovieModel, {_id: id}, {}, async function (result){
      //     // console.log(result)
      //     try{
      //       if (result){
      //         console.log("DONE");
      //         const moviedetails = await result;
      //         console.log(moviedetails);
      //         res.render('movie-details', {title: moviedetails.movieName, moviedetails: moviedetails});
      //         // res.send('In movie details');
      //       }
      //     } catch (e) {
      //       console.log(e)
      //     }
      //   });
      //
      // },

      getMovieDetails: function (req, res) {
        var id = req.params.id;
        db.findOne(MovieModel, {_id: id}, {}, async function (result){
          const moviedetails = await result;
          console.log(moviedetails);
          res.render('movie-details', {title: moviedetails.movieName, moviedetails: moviedetails});
        });

      },
      
      editMovie: function(req, res) {
        var movieName = req.body.movieName;

        MovieModel.findOne({'movieName': movieName}, (err, movie)=>{
          var moviePoster = movie.moviePoster;
          var movieBanner = movie.movieBanner;
          var movieGenre1 = movie.movieGenre1;
          var movieGenre2 = movie.movieGenre2;
          var movieGenre3 = movie.movieGenre3;
          var movieSynopsis = movie.movieSynopsis;
          var movieDirector = movie.movieDirector;
          var movieCast = movie.movieCast;
          var movieTrailer = movie.movieTrailer;
          var status = movie.status;
          var locations = movie.locations;

          var newmoviePoster = req.body.moviePoster;
          var newmovieBanner = req.body.movieBanner;
          var newmovieGenre1 = req.body.movieGenre1;
          var newmovieGenre2 = req.body.movieGenre2;
          var newmovieGenre3 = req.body.movieGenre3;
          var newmovieSynopsis = req.body.movieSynopsis;
          var newmovieDirector = req.body.movieDirector;
          var newmovieCast = req.body.movieCast;
          var newmovieTrailer = req.body.movieTrailer;
          var newstatus = req.body.status;
          var newlocations = req.body.locations;

          if(newmoviePoster != ''){
            MovieModel.findOne({'email': email}, (err, movie2)=>{
              if(movie2 == null){
                moviePoster = newmoviePoster;
              } 
              else{
                  res.render('managerEditMovies', {
                  error: "Email already exists in a different account"
                  })  
              }
          })
          }
          if(newmovieBanner != ''){
            MovieModel.findOne({'email': email}, (err, movie2)=>{
              if(movie2 == null){
                movieBanner = newmovieBanner;
              } 
              else{
                  res.render('managerEditMovies', {
                  error: "Email already exists in a different account"
                  })  
              }
          })
          }
          if(newmovieGenre1 != ''){
            movieGenre1 = newmovieGenre1;
          }
          if(newmovieGenre2 != ''){
            movieGenre2 = newmovieGenre2;
          }
          if(newmovieGenre3 != ''){
            movieGenre3 = newmovieGenre3;
          }
          if(newmovieSynopsis != ''){
            movieSynopsis = newmovieSynopsis;
          }
          if(newmovieDirector != ''){
            movieDirector = newmovieDirector;
          }
          if(newmovieCast != ''){
            movieCast = newmovieCast;
          }
          if(newmovieTrailer != ''){
            movieTrailer = newmovieTrailer;
          }
          if(newstatus != ''){
            status = newstatus;
          }
          if(newlocations != ''){
            locations = newlocations;
          }

          let edited = MovieModel({
              _id: user._id,
              username: username,
              firstName: firstName,
              lastName: lastName,
              gender: gender,
              birthday: birthday,
              contactNum: contactNum,
              email: email,
              password: password,
              picture: picture
          })

          MovieModel.updateOne(movie, edited, function(err, result) {
              res.render('managerEditMovies', {
                  error: 'Your edits will be seen when you click "Done Editing"'});
          });
        })
      }
}

module.exports = movieController;
