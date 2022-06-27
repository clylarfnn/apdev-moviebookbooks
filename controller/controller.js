/*
contains necessary callback functions to be called for a given client request related to index.hbs
*/
const controller = {
  /*
       executed when the client sends an HTTP GET request `/`
       as defined in `../routes/routes.js`
   */
   getIndex: function (req, res) {

       // render `../views/index.hbs`
       res.render('index');
   }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
