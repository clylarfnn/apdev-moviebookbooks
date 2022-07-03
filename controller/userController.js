const db = require('../model/db.js');
const UserModel = require("../model/user/user.js");
const CardModel = require("../model/user/card.js");
// const { post } = require("../routes/routes.js");

//const app = express();
//const fileUpload = require('express-fileupload');
//const path = require('path');
//app.use(fileUpload());

const userController = {
    editUser: function(req, res) {
        var username = req.session.user;

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
            var newpicture = req.body.picture;

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
            if(newpicture != ''){
                const {image} = newpicture;

                picture = image;
                //image.mv(path.resolve(__dirname,'public/images', image.name), (error))
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
                picture: picture
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
                UserModel.findOne({'username': username,}, (err, user)=>{
                    CardModel.findOne({'username': username,}, (err, card)=>{
                        console.log("card",card)
                        res.render('userEditCard', {user:user, card:card});
                    });
                });
            });
        });
    },
    deleteBooking: (req, res) => {
        var username = req.session.user;

        console.log(req.body)

        /*var movieName = req.body.movieName;

        db.findMany(BookingModel, {}, username, async function(result) {
            var length = result.length;
            var bookings = new Array(length);
            for(i=0; i<length; i++){
                db.deleteOne (BookingModel, {'movieName': movieName}, async function(result) {
                    res.render("userProfile", {user: user, card: card, booking: bookings});
                });
            }
        });*/
    }
}

module.exports = userController;
