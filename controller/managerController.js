const db = require('../model/db.js');
const ManagerModel = require('../model/manager/manager.js');
const LocationModel = require('../model/location/location.js');

const managerController = {
    getEditCinema: (req, res) => {
        var username = req.session.user;

        ManagerModel.findOne({'username': username}, (err, user)=>{ 
            var managerlocation = user.location;   
            db.findMovieByLocation(managerlocation, function(movies){
                LocationModel.findOne({'location': managerlocation}, (err, location)=>{
                    res.render('managerEditCinema', {
                    managerMovieOptions: movies,
                    user: user
                });
                })
            });
        });
    },
    getEditMovies: (req, res) => {
        var username = req.session.user;
        console.log(username)

        ManagerModel.findOne({'username': username}, (err, user)=>{ 
            var managerlocation = user.location;   
            db.findMovieByLocation(managerlocation, function(movies){
                LocationModel.findOne({'location': managerlocation}, (err, location)=>{
                    console.log()
                    res.render('managerEditMovies', {
                        managerMovieOptions: movies,
                    user: user
                });
                })
            });
        });
    },
    getEditMoviesPage: (req, res) => {
        var username = req.session.user;
        var movie = req.body.movieName;
        console.log(req.body.movieName) //undefined

        ManagerModel.findOne({'username': username}, (err, user)=>{ 
            var managerlocation = user.location;   
            db.findMovieByLocation(managerlocation, function(movies){
                LocationModel.findOne({'location': managerlocation}, (err, location)=>{
                    res.render('managerEditMoviesPage', {
                    managerMovieOptions: movies,
                    movie: movie,
                    user: user
                });
                })
            });
        });
    }
}

module.exports = managerController;