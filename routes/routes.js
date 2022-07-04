// connects a specific callback function defined in controllers to its corresponding path and HTTP method.

// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controller/controller.js');
const movieController = require('../controller/movieController.js');
const loginController = require('../controller/loginController.js');
const movie_locationsController = require('../controller/movie_locationsController.js');
const { registerValidation } = require('../public/js/validator.js');
const registrationController = require('../controller/registrationController.js');
const managerController = require('../controller/managerController.js');
const userController = require('../controller/userController.js');
const { Router } = require('express');
const app = express();

app.get(`/`, controller.getIndex);
app.get('/checkUser', controller.checkUser)
app.get('/profile', controller.getProfile)

/*
    execute function getMovieDetails()
    defined in object `movieController` in `../controllers/movieController.js`
    when a client sends an HTTP GET request for `/movie-details`
*/
app.get('/movie-details/:id', movieController.getMovieDetails);
app.get('/getMovie', movieController.getMovie);
app.get('/getMovieID', movieController.getMovieID);
// app.get('/getBanners', movieController.getBanner);

app.get('/getSchedule', movieController.getSchedule);

app.get('/getAvailableSeats', movieController.getAvailableSeats);

app.get('/addViewing', movieController.addViewing);
app.get('/checkScheds', movieController.checkScheds);
app.get('/getTimeID', movieController.getTimeID);
app.get('/addNewSeat', movieController.addNewSeat)
app.get('/deleteSched', movieController.deleteSched)
app.get('/getTimesByDate', movieController.getTimesByDate)
app.get('/movie-details/:id/booking/:loc/:date/:time', movieController.bookMovie)
app.get('/movie-details/:id/checkout/:sid/:cid/:seats', movieController.checkOut)
app.get('/paid', movieController.paidBooking)
app.get('/checkBookingStatus', userController.checkBookingStatus)
app.post('/searchMovies', movieController.searchMovies)
// app.get('/setBooking', movieController.setBooking)

// app.get('/userprofile', controller.tempEdit);

/*
    execute function getLogin()
    defined in object loginController in `../controllers/loginController.js`
    when a client sends an HTTP GET request for `/login`
*/
app.get('/login', loginController.getLogin);

app.get('/logout',loginController.getLogout);
// app.get('/registration', loginController.getRegister);
app.get('/registration', registrationController.getRegister);
app.get('/all_locations', controller.getAllLoc);
app.get('/about_us',controller.getAboutUs);

app.get('/moviesperloc/:location', movie_locationsController.getMoviesPerLoc);
app.get('/moviesperloc/movie-details/:id', movieController.movieRedirect);
app.get('/now-showing', movie_locationsController.getNowShowing);

app.post('/login', loginController.postLogin);
app.post('/submituser', registerValidation, registrationController.register);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/

//app.post('/register', registerValidation, loginController.register);
app.post('/submituser', registerValidation, registrationController.register);
app.get('/profile', controller.getProfile);
app.get('/usereditprofile', controller.getUserEdit);
app.get('/usereditcard', controller.getUserEditCard);
app.post('/submituseredit', userController.editUser);
app.post('/submitcardedit', userController.editPaymentMethod);
app.post('/cancelbooking', userController.deleteBooking);
app.post('/submiteditmovie', movieController.editMovie);
app.post('/addmovie', movieController.addMovie);
app.post('/editcinema', movieController.editCinema);

app.get('/editcinema', managerController.getEditCinema);
app.get('/editmovies', managerController.getEditMovies);
app.get('/editmoviespage', managerController.getEditMoviesPage);

module.exports = app;
