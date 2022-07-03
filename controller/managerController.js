const db = require('../model/db.js');
const ManagerModel = require('../model/manager/manager.js');

const managerController = {
    getEditCinema: (req, res) => {
        /* var location = req.cookies.location;
        var username = req.cookies.username;
            
        db.findMovieByLocation("location", async function(movies){
            const location = await movies;

           ManagerModel.findOne({'username': username}, (err, user)=>{
                console.log(user);
                res.render('managerEditCinema', {location, user: user});
            });
        });
        */
        db.findMovieByLocation("Manila", async function(movies){
            const location = await movies;
            ManagerModel.findOne({'username': "managerManila"}, (err, user)=>{
                console.log(user);
                res.render('managerEditCinema', {location, user: user});
            });
        });
    },
    getEditMovies: (req, res) => {
        res.render('managerEditMovies');
    }
}

module.exports = managerController;