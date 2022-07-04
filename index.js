
var mongoose = require('mongoose')

const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

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

//for file upload
const fileUpload = require('express-fileupload');
const path = require('path');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
hostname = process.env.HOSTNAME;


// set `hbs` as view engine
app.set('view engine', 'hbs');

// sets `/views/partials` as folder containing partial hbs files
hbs.registerPartials(__dirname + '/views/partials');

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static('public'));

// Sessions
app.use(session({
  secret: 'somegibberishsecret',
  store: MongoStore.create({ mongoUrl: `mongodb+srv://DaniSolis:danielle7901@moviebookbooks.hhovu.mongodb.net/moviebookbooks` }),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

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

// Flash
app.use(flash());

// Global messages vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// connects to the database
// connects to the database
mongoose.connect(`mongodb+srv://DaniSolis:danielle7901@moviebookbooks.hhovu.mongodb.net/moviebookbooks`, {useNewUrlParser: true, useUnifiedTopology: true});

// binds the server to a specific port
app.listen(PORT, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + PORT);
});
