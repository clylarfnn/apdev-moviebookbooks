const managerController = {
    getEditCinema: (req, res) => {
        res.reder('managerEditCinema');
    },
    getEditMovies: (req, res) => {
        res.reder('managerEditMovies');
    }
}

module.exports = managerController;