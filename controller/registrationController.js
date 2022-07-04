const UserModel = require('../model/user/user.js');
var mongoose = require('mongoose');

//for images
const fileUpload = require('express-fileupload');
const path = require('path');

const registrationController = {
    getRegister: function (req, res)
    {
        /*if(req.cookies.user)
            req.session.user = req.cookies.user;
        if(req.session.user)
            res.render('registration', {user: req.session.user});
        else*/
            res.render('registration');
    },
    register: function (req, res) {
        console.log()

        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var password2 = req.body.password2;
        var newpicturename = req.body.picture;

      //  console.log(password + " " + password.type);

        if(UserModel.findOne({'username': username}, (err, user)=>{
            if(user != null){
                res.render('registration', {
                    error: "Username already exists!"
                })
            }
        })){
        }
        if(UserModel.findOne({'email': email}, (err, user)=>{
            if(user != null){
                res.render('registration', {
                    error: "Email already exists!"
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
            console.log(req.files)
            if(!req.files){
              console.log("no pic")
              console.log(req.body.picture)
              console.log(typeof req.body.picture)
            }
            else{
                const picture = req.files.picture
                newpicturename = picture.name
              //  picture = image;
              //  pic = req.files.picture;
                //picture.mv(path.resolve(__dirname,'public/images', picture.name));
                picture.mv(path.resolve(__dirname+'/..','public/images', picture.name));
            }

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
                picture: newpicturename
            })

            user.save(function(err){
                if (err){
                    res.render('registration',{
                        error: "Error: ${err}"
                    })  
                }  
                else{                   
                    res.render('login'//, {
                        //success: "Succesfully registered account!"}
                    )
                } 
            })
        }
    }
}

module.exports = registrationController;