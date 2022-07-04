var mongoose = require('mongoose');
var multer = require('multer');

// import module `location` from `../models/location/location.js`
const LocationModel = require('./location/location.js');
const MovieModel = require('./location/movie.js');
const ScheduleModel = require('./location/schedule.js');
const SeatModel = require('./location/seats.js');
const TimeModel = require('./location/time.js');
const MovieFileModel= require('./location/movieFIle.js');

// import module `user` from `../models/user/user.js`
const UserModel = require('./user/user.js');
const BookingModel = require('./user/booking.js');
const CardModel = require('./user/card.js');
const PaymentMethodModel = require('./user/paymentMethod.js');
const UserPictureModel = require('./user/userPicture.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('./manager/manager.js');
const ManagerPictureModel = require('./manager/managerPicture.js');

/* 
POSSIBLE FUNCTIONS FOR THE CONTROLLER
addMovie, deleteMovie, editUser, editManager, postLogin, postRegister
searchMovie, editMovie, getProfile(?), bookMovie, deleteBooking, submitMovie, logIN, logOut
*/

const controller = {

    /*
       executed when the client sends an HTTP GET request `/`
       as defined in `../routes/routes.js`
   */
    getIndex: function (req, res) 
    {

        // render `../views/index.hbs`
        /*
        */
        if(req.cookies.user){
            req.session.user = req.cookies.user;
        }
        res.render('index');
    },
    getRegister: (req, res)=>
    {
        if(req.cookies.user){
            req.session.user = req.cookies.user;
        }
        res.render('registration');
    },
  
    getLogin: (req, res)=>
    {
        if(req.cookies.user)
            req.session.user = req.cookies.user;
        res.render('login');
    },
   
    getAboutUs: (req, res)=>{
        if(req.cookies.user)
            req.session.user = req.cookies.user;
		res.render('about_us');
    },



}


module.exports = controller;