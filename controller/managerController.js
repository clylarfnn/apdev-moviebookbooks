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
                    managerCinemaOptions: location, 
                    user: user
                });
                })
            });
        });
    },
    getEditMovies: (req, res) => {
        var username = req.session.user;

        ManagerModel.findOne({'username': username}, (err, user)=>{
            console.log(user);
            res.render('managerEditMovies', {user: user});
        });
    }
}

module.exports = managerController;