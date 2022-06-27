// connects a specific callback function defined in controllers to its corresponding path and HTTP method.

// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controller/controller.js');


const app = express();

app.get(`/`, controller.getIndex);

/*
    exports the object `app` (defined above)
    when another script exports from this file
*/
module.exports = app;
