// import module `user` from `../models/user/user.js`
const UserModel = require('../model/user/user.js');
const ManagerModel = require('../model/manager/manager.js');
const CardModel = require('../model/user/card.js');

var mongoose = require('mongoose');

const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const loginController = {
    getLogin: function (req, res)
    {
        /*if(req.cookies.user)
            req.session.user = req.cookies.user;*/
        //res.redirect('login');
        res.render('login');
    },
    login: function (req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var password2 = req.body.password2;
        console.log("hallo")
        if(UserModel.findOne({'username': username}, (err, user)=>{
            console.log("check if user")
            if(user = null){
                if(ManagerModel.findOne({'username': username}, (err, user)=>{
                    console.log("check if manager")
                    if(user = null){     
                        res.render('login', {
                            error: "User not found!"
                        })
                    }
                })){
                }
            }
        })){
        }
        //not sure with password
        if(UserModel.findOne({'username': username}, (err, user)=>{
            if(password = user.password){
                if(ManagerModel.findOne({'username': username}, (err, user)=>{
                    if(password = user.password){     
                        res.render('login', {
                            error: "Incorrect Password"
                        })
                    }
                })){
                }
            }
        })){
        }
        if(password != password2){
            res.render('login', {
                error: "Passwords do not match!"
            })
        }
        else{
            if(UserModel.findOne({'username': username}, (err, user)=>{
                if(user = null){
                    res.render('managerProfile')
                }
                else{
                    res.render('index')
                }
            })){
            }
        }
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
    }
}
module.exports = loginController;