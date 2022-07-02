const db = require('../model/db.js');
const UserModel = require("../model/user/user.js");
const CardModel = require("../model/user/card.js");
const { post } = require("../routes/routes.js");

//const app = express();
//const fileUpload = require('express-fileupload');
//const path = require('path');
//app.use(fileUpload());

const userController = {
    editUser: function(req, res) {
        var username = req.session.username;

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
                res.render('userEditProfile', {
                    error: 'Your edits will be seen when you click "Done Editing"'});
            });
        })
    },

    editPaymentMethod: (req, res) => {
        var username = req.session.username;

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var cardNum = req.body.cardNum;
        var expiration = req.body.expiration;
        var bank = req.body.bank;
        var cardType = req.body.cardType;
        var cvv = req.body.cvv;
        var debitOrCredit = req.body.debitOrCredit;

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
            res.render('userEditCard', {
                error: 'Your edits will be seen when you click "Done Editing"'});
        });
    }
}

module.exports = userController;