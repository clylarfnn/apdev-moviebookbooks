// connects a specific callback function defined in controllers to its corresponding path and HTTP method.

// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controller/controller.js');
const movieController = require('../controller/movieController.js');


const app = express();

app.get(`/`, controller.getIndex);

/*
    execute function getMovieDetails()
    defined in object `movieController` in `../controllers/movieController.js`
    when a client sends an HTTP GET request for `/movie-details`
*/
app.get('/movie-details/:id', movieController.getMovieDetails);

app.get('/getSchedule', movieController.getSchedule);

app.get('/getAvailableSeats', movieController.getAvailableSeats);

app.get('/addViewing', movieController.addViewing);
app.get('/checkScheds', movieController.checkScheds);
app.get('/getTimeID', movieController.getTimeID);
app.get('/addNewSeat', movieController.addNewSeat)
app.get('/deleteSched', movieController.deleteSched)
app.get('/getTimesByDate', movieController.getTimesByDate)
app.get('/movie-details/:id/booking', movieController.bookMovie)
app.get('/setBooking', movieController.setBooking)

// app.get('/userprofile', controller.tempEdit);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;
