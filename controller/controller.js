/*
contains necessary callback functions to be called for a given client request related to index.hbs
*/
const db = require('../model/db.js');
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
const UserPictureModel = require('../model/user/userPicture.js');

// import module `manager` from `../models/manager.js`
const ManagerModel = require('../model/manager/manager.js');
const ManagerPictureModel = require('../model/manager/managerPicture.js');
// const { render } = require('../routes/routes.js');


const controller = {

    /*
       executed when the client sends an HTTP GET request `/`
       as defined in `../routes/routes.js`
   */
       getIndex: function (req, res)
       {
        /*
        run();
            async function run() {
                console.log("running");
                const manager1 = new ManagerModel({
                location: "Davao City",
                username: "managerDavao",
                firstName: "Coco",
                lastName: "Solis",
                gender: "Male",
                birthday: '20019-06-09',
                contactNum: 123456789,
                email: "coco@moviebookbooks.com",
                password: "987654321",
                picture: "coco.jpeg",
                });
                await manager1.save();
                console.log(manager1);
            }
            */
         console.log("IN GET INDEX")
           // render `../views/index.hbs`
           /*
           */
           /* //remove comment later
           if(req.cookies.user){
               req.session.user = req.cookies.user;
           }*/
           var banners
           // db.deleteMany(ScheduleModel, {})
           db.findMany(MovieModel, {}, {movieBanner: 1, _id:0}, async function(result){
             if (result){
               banners = result
               console.log(banners)
               // res.render('partials/bannerslides', {banners: banners})
             }
           });

           // location 1 movies
           db.findMovieByLocation("Manila City", async function(movies){
              const location1 = await movies;
              // console.log(location1);

              //location 2 movies
              db.findMovieByLocation("Bacolod City", async function(movies){
                const location2 = await movies;

                db.findMovieByLocation("Davao City", async function(movies){
                    const location3 = await movies;

                    db.findMovieByLocation("Pangasinan", async function(movies){
                        const location4 = await movies;

                        db.findMovieByLocation("Bulacan", async function(movies){
                            const location5 = await movies;

                            res.render('index', {location1, location2, location3, location4, location5, banners});
                        });
                    });
                });
              });
            });

           // res.render('index');
       },

       getRegister: function (req, res) //for sign up
       {
          /* if(req.cookies.user)
               req.session.user = req.cookies.user;
           }
           if(req.session.user)
                res.render('registration', {user: req.session.user});
           else*/
                res.render('registration');
       },
       getLogin: function (req, res)
       {
            /*if(req.cookies.user)
               req.session.user = req.cookies.user;
            if(req.session.user)
                res.render('login', {user: req.session.user});
            else*/
                res.render('login');
       },
       getAllLoc: (req, res)=>
       {
         //   if(req.cookies.user)
           //     req.session.user = req.cookies.user;
            res.render('all_locations');
       },
       getAboutUs: (req, res)=>{
       // if(req.cookies.user)
           // req.session.user = req.cookies.user;
            res.render('about_us');
    },
       /*
       getMoviesPerLoc: (req, res)=>
       {
            if(req.cookies.user)
                req.session.user = req.cookies.user;
       },

 */
       checkUser: (req, res) =>{
         if (req.session.user !== undefined){
           //user exits
           console.log(req.session.user)
           res.send(true)
         }
         else{
           res.send(false)
         }
       },

       // getProfile: (req, res) => {
       //   username = req.session.user;
       //   if (username !== undefined){
       //     //remove code below
       //     res.send("you are " + username);
       //   }
       //   else{
       //     res.redirect('/login')
       //   }
       // },

       getBanner: function (req, res) {
         db.findMany(MovieModel, {}, {movieBanner: 1, _id:0}, async function(result){
           if (result){
             const banners = result
             console.log(banners)
             return banners;
             // res.render('partials/bannerslides', {banners: banners})
           }
         });
       },
       getProfile: function (req, res){
           var username = req.session.user;

           if(username !== undefined){
                if(username.includes("manager")){
                    ManagerModel.findOne({'username': username}, (err, user)=>{
                    res.render("managerProfile", {user: user});
                    }
                )}
               else{
                   UserModel.findOne({'username': username}, (err, user)=>{
                        CardModel.findOne({'username': username}, (err, card)=>{
                            db.findMany(BookingModel, {username: username}, {}, async function(result) {
                                var bookings = await result
                                console.log(bookings)
                                res.render("userProfile", {
                                    user: user,
                                    card: card,
                                    bookingHistory: bookings,
                                    currentBooking: bookings
                                });
                            });
                        });
                    });
                }
           }
           else{
               //fix
               // res.send("User Not Found, Return to Previous Page");
               res.redirect('/login')
           }
       },
       /*getBookingDetails: function (req, res){
        var username = req.session.user;

        if(username !== undefined){
            if(username.includes("manager")){
                ManagerModel.findOne({'username': username}, (err, user)=>{
                res.render("managerProfile");
                }
            )}
            else{
                UserModel.findOne({'username': username}, (err, user)=>{
                     console.log(user)
                     CardModel.findOne({'username': username}, (err, card)=>{
                         if(db.findMany(BookingModel, username, username, async function(result) {})){
                             console.log(result);
                             res.render("userProfile", {user: user, card: card, booking: result});
                         }
                         else{
                             res.render("userProfile", {card: card});
                         }
                     })
                })
            }
        }
        else{
            //fix
            // res.send("User Not Found, Return to Previous Page");
            res.redirect('/login')
        }
        },*/
        getUserEdit: (req, res)=>{
            var username = req.session.user;

            UserModel.findOne({'username': username}, (err, user)=>{
                res.render("userEditProfile", {user: user});
            })
        },
        getUserEditCard: (req, res)=>{
            var username = req.session.user;

            UserModel.findOne({'username': username}, (err, user)=>{
                console.log(user)
                CardModel.findOne({'username': username}, (err, card)=>{
                    res.render("userEditCard", {user: user, card: card});
                })
            })
        }

}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
