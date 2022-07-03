const db = require('../model/db.js');
const ManagerModel = require('../model/manager/manager.js');

const managerController = {
    getEditCinema: (req, res) => {
        var username = req.session.user;

        db.findMovieByLocation("Manila", async function(movies){
            const location = await movies;
            ManagerModel.findOne({'username': username}, (err, user)=>{
                console.log(user);
                res.render('managerEditCinema', {location, user: user});
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