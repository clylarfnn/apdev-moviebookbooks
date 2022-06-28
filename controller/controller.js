/*
contains necessary callback functions to be called for a given client request related to index.hbs
*/
// import module `location` from `../models/location/location.js`
const LocationModel = require('../model/location/location.js');
const MovieModel = require('../model/location/movie.js');
const ScheduleModel = require('../model/location/schedule.js');
const SeatModel = require('../model/location/seats.js');
const TimeModel = require('../model/location/time.js');
const MovieFileModel= require('../model/location/movieFile.js');

// import module `user` from `../models/user/user.js`
const UserModel = require('../model/user/user.js');
const BookingModel = require('../model/user/booking.js');
const CardModel = require('../model/user/card.js');
const PaymentMethodModel = require('../model/user/paymentMethod.js');
const UserPictureModel = require('../model/user/userPicture.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('../model/manager/manager.js');
const ManagerPictureModel = require('../model/manager/managerPicture.js');

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
           /* //remove comment later
           if(req.cookies.user){
               req.session.user = req.cookies.user;
           }*/
           res.render('index');
       },
       getRegister: (req, res)=>//for sign up
       {//not sure if render or redirect here
           if(req.cookies.user){
               req.session.user = req.cookies.user;
           }
           if(req.session.user)
                res.render('registration', {user: req.session.user});
           else
                res.render('registration');
       },
       getLogin: (req, res)=>
       {//not sure if render or redirect here
            if(req.cookies.user)
               req.session.user = req.cookies.user;
            if(req.session.user)
                res.render('login', {user: req.session.user});
            else
                res.render('login');
       },
       getMovieDetails: async (req, res)=> 
       {
           if(req.cookies.user)
               req.session.user = req.cookies.user;
            //do smth to render the movie details page that the user wants to see
            //hmm how 
            await MovieModel.findById(req.params.MovieName), (function(err, movie){//not sure pa if to use findbyId or findOne and if tama si params.MovieName or _id
                res.render('movie-details')//edit this bc idk how to specify which details are needed
                //hala do i include ScheduleModel pa for the schedule ahgjkl
            })
       },
       getAllLoc: (req, res)=>
       {
            if(req.cookies.user)
                req.session.user = req.cookies.user;
            res.render('all_locations');//not sure if render or redirect here
       },
       getMoviesPerLoc: (req, res)=>
       {
            if(req.cookies.user)
                req.session.user = req.cookies.user;
       },
       postLogin: (req, res)=>//edit login page for the hbs to include the error
       {
           UserModel.findOne({'email': req.body.email}, (err, user)=>{
               if(!user){
                   res.render('login', {error: "User not found"})
               }else{
                   user.comparePassword(req.body.password, (err, isMatch)=>{
                       if(!isMatch){
                           res.render('login', {error: "Wrong password"})
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
                           render('index');

                       }
                   })
               }
           })
       },
       postRegistration: (req, res)=>{ //edit registration page for the hbs to include the error
            UserModel.findOne({'email' : req.body.email}, (err, user)=>{
                if(user)
                {
                    res.render('registration', {error: "Email already exists"})
                }
            })
            if(req.body.password1 == req.body.password2)//if password and confirm password are the same
            {
                let user = new UserModel({
                    _id: new mongoose.Types.ObjectId(),//not sure here
                    username : req.body.username,
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    password : req.body.password
                })
                let card_deets = new CardModel({
                    _id: new mongoose.Types.ObjectId(), //not sure here
                    cardNum : req.body.cardNum,
                    username : req.body.username,
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    expiration : req.body.expiration,
                    cardType : req.body.cardType,
                    cvv : req.body.cvv,     
                })

                //save details to db, pero di ako sure here
                user.save(function (err){
                    if (err)
                        res.render('registration',{error: "Error"})    
                    else
                        res.render('login')
                })
                card_deets.save(function (err)
                {//not sure with this portion specifically
                    if (err)
                        res.render('registration',{error: "Error"})    
                    else
                        res.render('login')
                }
                )
            }
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
           STILL A DRAFT/INCOMPLETE
       */
       submitMovie: (req, res)=>
       {
            let id;
            let movieName = req.body.movieName;
            let moviePoster = req.body.moviePoster;
            let movieBanner = req.body.movieBanner;
            let movieGenre1 = req.body.movieGenre1;
            let movieGenre2 = req.body.movieGenre2;
            let movieGenre3 = req.body.movieGenre3;
            let movieDirector = req.body.movieDirector;
            let movieCast = req.body.movieCast;
            let movieTrailer = req.body.movieTrailer;
            let status = req.body.status;

       },

}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
