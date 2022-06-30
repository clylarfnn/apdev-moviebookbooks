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
    getRegDetails: (req,res)=>
    {
        //use this to get the details from registering 
        //INCOMPLETE
        if(req.cookies.user)
            req.session.user = req.cookies.user;
    },
    getLogin: (req, res)=>
    {
        if(req.cookies.user)
            req.session.user = req.cookies.user;
        res.render('login');
    },
    getMovie: (req, res)=>
    {
        if(req.cookies.user)
            req.session.user = req.cookies.user;
    },
    postLogin: (req, res)=>
    {
        UserModel.findOne({'email': req.body.email}, (err, user)=>{
            if(!user){
                res.render('login', {
                    error: "User not found"
                })
            }else{
                user.comparePassword(req.body.password, (err, isMatch)=>{
                    if(!isMatch){
                        res.render('login', {
                            error: "Wrong password"
                        })
                    }
                    else{
                        req.session.user = user
                        res.locals.user = user
                        if(req.body.remember){
                            res.cookie("user", req.session.user,{
                                maxAge:1000*60*60*24*365,
                                httpOnly:true
                            })
                        }  
                        //unsure what to render here
                       
                    }
                })
            }
        })
    },
    getAboutUs: (req, res)=>{
        if(req.cookies.user)
            req.session.user = req.cookies.user;
		res.render('about_us');
    },

    bookMovie: (req, res)=>
    {
    //this might be under user pala
    },

    /*
        allows manager to submit a new movie
    */
    submitMovie: (req, res)=>
    {

    },




}


module.exports = controller;