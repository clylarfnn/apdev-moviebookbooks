// const userModel = require('../model/user')
// const managerModel = require ('../model/manager')
// const locationModel = require ('../model/location')
// var mongoose = require('mongoose')
// var multer = require('multer')
// var upload = multer({dest: __dirname + 'public/images/items/'})
// const emailjs = require('emailjs');
// require('dotenv').config();

// to be continued

const mongoose = require('mongoose');
const dotenv = require(`dotenv`);
const bodyParser = require(`body-parser`);

// import module `express`
const express = require('express');

// import module `hbs`
const hbs = require('hbs');

// import module `routes` from `./routes/routes.js`
const routes = require('./routes/routes.js');

// import module `database` from `./model/db.js`
const db = require('./model/db.js');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
hostname = process.env.HOSTNAME;


// set `hbs` as view engine
app.set('view engine', 'hbs');

// sets `/views/partials` as folder containing partial hbs files
hbs.registerPartials(__dirname + '/views/partials');

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static('public'));

// define the paths contained in `./routes/routes.js`
app.use('/', routes);

// if the route is not defined in the server, render `../views/error.hbs`
// always define this as the last middleware
app.use(function (req, res) {
  // res.send("error");
  // next(createError(404));
  // console.log("error")
    res.render('error');
});

// connects to the database
mongoose.connect(`mongodb+srv://DaniSolis:danielle7901@moviebookbooks.hhovu.mongodb.net/moviebookbooks`, {useNewUrlParser: true, useUnifiedTopology: true});

// binds the server to a specific port
app.listen(PORT, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + PORT);
});
