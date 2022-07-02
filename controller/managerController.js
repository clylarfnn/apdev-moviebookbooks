const managerController = {
    getEditCinema: (req, res) => {
        /* var location = req.cookies.location;
            
        db.findMovieByLocation("location", async function(movies){
            const location = await movies;

            res.render('managerEditCinema', {location});
        });
        */
        db.findMovieByLocation("Manila", async function(movies){
            const location = await movies;

            res.render('managerEditCinema', {location});
        });
    },
    getEditMovies: (req, res) => {
        res.render('managerEditMovies');
    }
}

module.exports = managerController;