// import module `user` from `../models/user/user.js`
const UserModel = require('../model/user/user.js');
const CardModel = require('../model/user/card.js');

var mongoose = require('mongoose');

const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const loginController = {
    register: function (req, res) {
        var username = req.query.username;
        var email = req.query.email;
        var password = req.query.password;
        var password2 = req.query.password2;

        if(UserModel.findOne({'username': username})){
            res.render('registration', {
                error: "Username already exists!"
            })
        }
        else if(UserModel.findOne({'email': email})){
            res.render('registration', {
                error: "Email already exists!"
            })
        }
        else if(password != password2){
            res.render('registration', {
                error: "Passwords do not match!"
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
                if (err){
                    console.log("bobo");
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
    },

    getRegister: function (req, res)
    {
        /*if(req.cookies.user){
            req.session.user = req.cookies.user;
        }*/
        res.render('registration');
       // res.redirect('registration');
    },
    getLogin: function (req, res)
    {
        /*if(req.cookies.user)
            req.session.user = req.cookies.user;*/
        //res.redirect('login');
        res.render('login');
    },
    
    postLogin: function (req, res)
    {
        UserModel.findOne({'email': req.body.email}, (err, user)=>{
            if(!user){
                res.render('login', {
                    error: "User not found"
                })
            }else{
                user.comparePassword(req.body.password, (err, isMatch)=>{
                    if(!isMatch){
                        res.render('login', {
                            error: "Wrong password"
                        })
                    }
                    else{
                        req.session.user = user
                        res.locals.user = user
                        if(req.body.remember){
                            res.cookie("user", req.session.user,{
                                maxAge:1000*60*60*24*365,
                                httpOnly:true
                            })
                        }  
                        //unsure what to render here
                        res.render('index');
                    }
                })
            }
        })
    },

    postRegistration: function (req, res){ //edit registration page for the hbs to include the error
        UserModel.findOne({'email' : req.body.email}, (err, user)=>{
            if(user)
            {
                res.render('registration', {error: "Email already exists"})
            }
        })
        UserModel.findOne({'username' : req.body.username}, (err, user)=>{
            if(user)
            {
                res.render('registration', {error: "Username already exists"})
            }
        })

        if(req.body.password1 == req.body.password2)//if password and confirm password are the same
        {
            let user = new UserModel({
                //_id: new mongoose.Types.ObjectId(),//not sure here
                username : req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                password : req.body.password,
                gender : req.body.gender,
                birthday : req.body.birthday,
                contactNum : req.body.contactNum,
                email : req.body.email,
                picture : req.body.picture
            })
            let card_deets = new CardModel({
                //_id: new mongoose.Types.ObjectId(), //not sure here
                cardNum : req.body.cardNum,
                username : req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                expiration : req.body.expiration,
                bank : req.body.bank,
                cardType : req.body.cardType,
                cvv : req.body.cvv,
                debitOrCredit : req.body.debitOrCredit
            })

            //save details to db, pero di ako sure here
            user.save(function (err){
                if (err)
                    res.render('registration',{error: "Error"})    
                else
                    res.render('login')
            })
            card_deets.save(function (err)
            {//not sure with this portion specifically
                if (err)
                    res.render('registration',{error: "Error"})    
                else
                    res.render('login'); //might be redirect nalang
            })
        }
        /*
        const errors = validationResult(req);

        if (errors.isEmpty()) {
        const { name, email, password } = req.body;

        UserModel.getOne({email : email})
        } else {
        const messages = errors.array().map((item) => item.msg);

        req.flash('error_msg', messages.join(' '));
        res.redirect('/registration');
        }
        */
   }
}
module.exports = loginController;