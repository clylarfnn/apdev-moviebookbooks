const userModel = require('../model/user')
const managerModel = require ('../model/manager')
const locationModel = require ('../model/location')
var mongoose = require('mongoose')
var multer = require('multer')
var upload = multer({dest: __dirname + 'public/images/items/'})
const emailjs = require('emailjs');
require('dotenv').config();

// to be continued
