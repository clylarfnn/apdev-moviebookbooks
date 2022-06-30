const UserModel = require('../model/user/user.js');
var mongoose = require('mongoose');

const registrationController = {
    register: function (req, res) {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var password2 = req.body.password2;

        console.log(username)

        if(UserModel.findOne({'username': username}, (err, user)=>{
            if(user != null){
                res.render('registration', {
                    error: "Username already exist!"
                })
            }
        })){
        }
        if(UserModel.findOne({'email': email}, (err, user)=>{
            if(user != null){
                res.render('registration', {
                    error: "Email already exist!"
                })
            }
        })){
        }
        if(password != password2){
            res.render('registration', {
                error: "Passwords do not match!"
            })
        }
        if(password.length < 6){
            res.render('registration', {
                error: "Password is too short!"
            })
        }
        else{
            let user = new UserModel({
                _id: new mongoose.Types.ObjectId(),
                username: username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                birthday: req.body.birthday,
                contactNum: req.body.contactNum,
                email: email,
                password: password,
                picture: req.body.picture
            })

            user.save(function(err){
                console.log(err)
                if (err){
                    res.render('registration',{
                        error: "Error: ${err}"
                    })  
                }  
                else{
                    res.send
                    res.render('login', {
                        success: "Succesfully registered account!"
                    })
                } 
            })
        }
    }
}

module.exports = registrationController;