const managerController = {
    getEditCinema: (req, res) => {
        res.render('managerEditCinema');
    },
    getEditMovies: (req, res) => {
        res.render('managerEditMovies');
    }
}

module.exports = managerController;