const db = require('../model/db.js');
const UserModel = require("../model/user/user.js");
const CardModel = require("../model/user/card.js");
const BookingModel = require("../model/user/booking.js");
const LocationModel = require('../model/location/location.js');
const MovieModel = require('../model/location/movie.js');
const ScheduleModel = require('../model/location/schedule.js');
const SeatModel = require('../model/location/seats.js');
const TimeModel = require('../model/location/time.js');
const MovieFileModel= require('../model/location/movieFile.js');

//const app = express();
const fileUpload = require('express-fileupload');
const path = require('path');
//app.use(fileUpload());

const userController = {
    editUser: function(req, res) {
        var username = req.session.user;
        console.log(req.body)

        UserModel.findOne({'username': username}, (err, user)=>{
            var firstName = user.firstName;
            var lastName = user.lastName;
            var gender = user.gender;
            var birthday = user.birthday;
            var contactNum = user.contactNum;
            var email = user.email;
            var password = user.password;
            var picture = user.picture;

            var newfirstName = req.body.firstName;
            var newlastName = req.body.lastName;
            var newgender = req.body.gender;
            var newbirthday = req.body.birthday;
            var newcontactNum = req.body.contactNum;
            var newemail = req.body.email;
            var newpassword = req.body.password;
            var newpicturename = req.body.picture;
            // var newpicture = req.files.picture;

            if(newfirstName != ''){
                firstName = newfirstName;
            }
            if(newlastName != ''){
                lastName = newlastName;
            }
            if(newgender != ''){
                gender = newgender;
            }
            if(newbirthday != ''){
                birthday = newbirthday;
            }
            if(newcontactNum != ''){
                contactNum = newcontactNum;
            }
            if(newemail != ''){
                UserModel.findOne({'email': email}, (err, user2)=>{
                    if(user2 == null){
                        email = newemail;
                    }
                    else{
                        res.render('userEditProfile', {
                        error: "Email already exists in a different account"
                        })
                    }
                })
            }
            if(newpassword != ''){
                password = newpassword;
            }
            console.log(req.files)
            if(!req.files){
              console.log("no pic")
              console.log(req.body.picture)
              console.log(typeof req.body.picture)
            }
            else{
             //   const {image} = newpicture;
               // const image = newpicture;
                console.log("new pic");
                const picture = req.files.picture

              //  picture = image;
              //  pic = req.files.picture;
                //picture.mv(path.resolve(__dirname,'public/images', picture.name));
                picture.mv(path.resolve(__dirname+'/..','public/images', picture.name));
                // picture.mv(path.resolve(__dirname+'/..','public/images/profile-imgs',img_file.name)
            }

            let edited = UserModel({
                _id: user._id,
                username: username,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                birthday: birthday,
                contactNum: contactNum,
                email: email,
                password: password,
                picture: newpicturename
            })

            UserModel.updateOne(user, edited, function(err, result) {
                UserModel.findOne({'username': username,}, (err, user)=>{
                    CardModel.findOne({'username': username,}, (err, card)=>{
                        console.log("card",card)
                        res.render('userEditProfile', {user:user, card:card});
                    });
                });
            });
        })
    },

    editPaymentMethod: (req, res) => {
        var username = req.session.user;

        CardModel.findOne({'username': username}, (err, user)=>{
            var firstName = user.firstName;
            var lastName = user.lastName;
            var cardNum = user.cardNum;
            var expiration = user.expiration;
            var bank = user.bank;
            var cardType = user.cardType;
            var cvv = user.cvv;
            var debitOrCredit = user.debitOrCredit;

            var newfirstName = req.body.firstName;
            var newlastName = req.body.lastName;
            var newcardNum= req.body.cardNum;
            var newexpiration = req.body.expiration;
            var newbank = req.body.bank;
            var newcardType = req.body.cardType;
            var newcvv = req.body.cvv;
            var newdebitOrCredit = req.body.debitOrCredit;

            if(newfirstName != ''){
                firstName = newfirstName;
            }
            if(newlastName != ''){
                lastName = newlastName;
            }
            if(newcardNum != ''){
                cardNum = newcardNum;
            }
            if(newexpiration != ''){
                expiration = newexpiration;
            }
            if(newbank != ''){
                bank = newbank;
            }
            if(newcardType != ''){
                cardType = newcardType;
            }
            if(newcvv != ''){
                cvv = newcvv;
            }
            if(newdebitOrCredit != ''){
                debitOrCredit = newdebitOrCredit;
            }

            let edited = CardModel({
                _id: user._id,
                username: username,
                firstName: firstName,
                lastName: lastName,
                cardNum: cardNum,
                expiration: expiration,
                bank: bank,
                cardType: cardType,
                cvv: cvv,
                debitOrCredit: debitOrCredit
            })

            CardModel.updateOne(user, edited, function(err, result) {
                UserModel.findOne({'username': username}, (err, user)=>{
                    CardModel.findOne({'username': username}, (err, card)=>{
                        console.log("card",card)
                        res.render('userEditCard', {user:user, card:card});
                    });
                });
            });
        });
    },
    deleteBooking: (req, res) => {
      var username = req.session.user;
      // var booking = req.query.booking
      var bookID = req.body.bookID

      console.log(bookID)

      // console.log(booking.bookingID)
      //
      db.findOne(BookingModel, {username: username, _id: bookID},{}, function (result) {
        const book = result
        console.log(book)

        const viewingID = book.viewingID
        console.log(viewingID)
        db.findOne(ScheduleModel, {'viewingSched._id': viewingID}, {}, function(result){
          console.log(result)
        })


        // after finding if the booking exists, delete
        db.deleteOne(BookingModel, {username: username, _id: bookID}, function (result) {
            if(result){
              db.updateSeats(viewingID, book.seats, 'Available', function (result){
                if (result){
                  console.log("updated status of seats")
                  res.redirect('/profile')
                  // //reload
                  //  db.getUserInfo(username, function (result) {
                  //      var user = result.user;
                  //      var card = result.card;
                  //      db.findMany(BookingModel, {username: username}, {}, async function(result) {
                  //          var bookings = await result
                  //          console.log(bookings)
                  //          res.render("userProfile", {
                  //              user: user,
                  //              card: card,
                  //              bookingHistory: bookings,
                  //              currentBooking: bookings
                  //          });
                  //      });
                  //  })

                }
              })
            }
        })
      })
    },
    // deleteBooking: (req, res) => {
    //     var username = req.session.user;
    //     var date = req.body.date;
    //
    //     console.log(date)
    //
    //     db.findMany(BookingModel, {}, {'username': username}, async function(result) {
    //         var bookings = await result;
    //
    //         for(i=0;i<bookings.length; i++){
    //             if(bookings[i].date = date){
    //                 BookingModel.deleteOne({'_id': bookings[i]._id}, (err,deleted)=>{
    //                     UserModel.findOne({'username': username}, (err, user)=>{
    //                         CardModel.findOne({'username': username}, (err, card)=>{
    //                             db.findMany(BookingModel, {username: username}, {}, async function(result) {
    //                                 var bookings = await result
    //                                 console.log(bookings)
    //                                 res.render("userProfile", {
    //                                     user: user,
    //                                     card: card,
    //                                     bookingHistory: bookings,
    //                                     currentBooking: bookings
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             }
    //         }
    //     });
    // },

    checkBookingStatus: function(req, res) {
      username = req.session.user
      var status;
      db.findMany(BookingModel, {username: username}, {}, async function(result) {
          const bookings = await result
          today = new Date()
          // console.log(today)
          for (let i in bookings){
            // console.log(bookings[i].date + " vs " + today + " = " + (bookings[i].date < today))
            if (bookings[i].date < today){
              console.log("booking is done")
              var bookID = bookings[i]._id.toHexString()
              BookingModel.updateOne({_id: bookID}, {$set: {done: true}}, async function (err, result){
                const update = await result
                console.log(bookings[i].viewingID)
                if(update){
                  db.updateSeats(bookings[i].viewingID, bookings[i].seats, 'Available', function (result) {
                    if (result){
                      console.log("Updated booking status")

                    }
                  })

                }
                else{
                  console.log("Not updated booking status")
                }
              })
              // console.log(bookings[i]._id.toHexString())

              // console.log(bookID)
              // db.findOne(BookingModel, {_id: bookID, done: false}, {}, function (result){
              //   // console.log(result)
              //   if(result != null){
              //     console.log(bookings[i].viewingID)
              //     BookingModel.updateOne({_id: bookID}, {$set: {done: true}}, async function (err, result){
              //       const update = await result
              //       if(update){
              //         console.log("Updated booking status")
              //       }
              //       else{
              //         console.log("Not updated booking status")
              //       }
              //     })
              //   }
              // })
            }
            else{
            }
            // res.end()

          }
          // res.send(status)
      })
    }
}

module.exports = userController;
