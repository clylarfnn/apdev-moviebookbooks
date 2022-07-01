// import module `user` from `../models/user/user.js`
const db = require('../model/db.js');
const UserModel = require('../model/user/user.js');
const BookingModel = require('../model/user/booking.js');
const CardModel = require('../model/user/card.js');
const PaymentMethodModel = require('../model/user/paymentMethod.js');
const UserPictureModel = require('../model/user/userPicture.js');
const { render } = require('../routes/routes.js');
const { findOne } = require('../model/user/user.js');
const bcrypt = require('bcrypt');

const loginController ={
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
    postLogin: function (req, res) //add stuff pa for session handling and cookies ahsjdkgf
    {
       
        UserModel.findOne({username : req.body.username, password: req.body.password}, (err,user)=>{
            if(user)//user means that nasa database siya, !user means opposite
            {
                req.session.user = user
                res.locals.user = user
                console.log(req.session.user.email)
                if(req.body.remember){
                        console.log("remember me!")
                        res.cookie("user", req.session.user,{
                            maxAge:1000*60*60*24*365,
                            httpOnly:true
                        })
                    }

            }
            else
            {
                //let username_input = req.body.username.val();
                res.render('login',{error: "error"})
                //res.send("not in database");
            }
        });   
    },  
    
}
module.exports = loginController;