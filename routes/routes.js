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

// app.get(`/movie-details`, movieController.temp);

// app.get(`/:id`, movieController.getMoviePage);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/


//temp
app.get('/userprofile', controller.tempEdit);

module.exports = app;
