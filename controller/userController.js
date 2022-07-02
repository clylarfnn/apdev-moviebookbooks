const UserModel = require("../model/user/user.js");
const CardModel = require("../model/user/card.js");
const { post } = require("../routes/routes.js");

//const app = express();
//const fileUpload = require('express-fileupload');
//const path = require('path');
//app.use(fileUpload());

const userController = {
    editUser: function(req, res) {
        //var username = req.cookies.username;
        UserModel.findOne({'username': "User1"}, (err, user1)=>{
            var username = user1.username;
            console.log("req", req.body);

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

            if(newfirstName != null || newfirstName != undefined){
                firstName = newfirstName;
            }
            if(newlastName != null || newfirstName != undefined){
                lastName = newfirstName;
            }
            if(newgender != null || newfirstName != undefined){
                gender = newgender;
            }
            if(newbirthday != null || newfirstName != undefined){
                birthday = newbirthday;
            }
            if(newcontactNum != null || newfirstName != undefined){
                contactNum = newcontactNum;
            }
            if(newemail != null || newfirstName != undefined){
                UserModel.findOne({'email': email}, (err, user2)=>{
                    if(user2 == null){
                        email = newemail;
                    } 
                    else{
                        res.render('userEditProfile', {user: user,
                        error: "Email already exists in a different account"
                        })  
                    }
                })
            }
            if(newpassword != null || newfirstName != undefined){
                password = newpassword;
            }
            if(newpicture != null || newfirstName != undefined){
                const {image} = newpicture;

                picture = image;
                //image.mv(path.resolve(__dirname,'public/images', image.name), (error))
            }

            /*let edited = user.UserModel({
                _id: user._id,
                username: username,
                firstName: newfirstName,
                lastName: newlastName,
                gender: newgender,
                birthday: newbirthday,
                contactNum: newcontactNum,
                email: email,
                password: password,
                picture: newpicture
            })

            edited.save(function(err){
                if (err){
                    res.render('registration',{
                        error: "Error: ${err}"
                    })  
                }  
                else{
                    res.render('userEditProfile', {user: user});
                } 
            })*/
            res.render('userEditProfile', {user: user});
        })
    })
    },
    editPaymentMethod: (req, res) => {
        var username = req.cookies.username;

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var cardNum = req.body.cardNum;
        var expiration = req.body.expiration;
        var bank = req.body.bank;
        var cardType = req.body.cardType;
        var cvv = req.body.cvv;
        var debitOrCredit = req.body.debitOrCredit;

        CardModel.findOne({'username': username}, (err, user)=>{
            console.log(user);
            if(firstName != null){
                user.firstName = firstName;
            }
            if(lastName != null){
                user.lastName = lastName;
            }
            if(cardNum != null){
                CardrModel.findOne({'cardNum': cardNum}, (err, user2)=>{
                    if(user2 = null){
                        user.cardNum = cardNum;
                    } 
                    else{
                        res.render('userEditCard',{
                        error: "Card already exists in a different account"
                        })  
                    }
                })
            }
            if(expiration != null){
                user.expiration = expiration;
            }
            if(bank != null){
                user.bank = bank;
            }
            if(cardType != null){
                user.cardType = cardType;
            }
            if(cvv != null){
                user.cvv = cvv;
            }
            if(debitOrCredit != null){
                user.debitOrCredit = debitOrCredit;
            }
        })

        res.render('userEditCard');
    }
}

module.exports = userController;