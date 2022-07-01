// connects a specific callback function defined in controllers to its corresponding path and HTTP method.

// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controller/controller.js');
const movieController = require('../controller/movieController.js');
const loginController = require('../controller/loginController.js');
const { registerValidation } = require('../public/js/validator.js');

const app = express();

app.get(`/`, controller.getIndex);

/*
    execute function getMovieDetails()
    defined in object `movieController` in `../controllers/movieController.js`
    when a client sends an HTTP GET request for `/movie-details`
*/
app.get(`/movie-details`, movieController.getMovieDetails);

/*
    execute function getLogin()
    defined in object loginController in `../controllers/loginController.js`
    when a client sends an HTTP GET request for `/login`
*/
app.get('/login', loginController.getLogin);

app.get('/login',loginController.getLogin);
app.get('/registration', loginController.getRegister);
app.get('/all_locations', controller.getAllLoc);
app.get('/about_us',controller.getAboutUs);

//app.post('/registration', registerValidation, loginController.postRegistration);
//app.post('/registration',loginController.postRegistration);
app.post('/login', loginController.postLogin);
/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;
