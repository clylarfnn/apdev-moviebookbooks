// import module `user` from `../models/user/user.js`
const UserModel = require('../model/user/user.js');
const BookingModel = require('../model/user/booking.js');
const CardModel = require('../model/user/card.js');
const PaymentMethodModel = require('../model/user/paymentMethod.js');
const UserPictureModel = require('../model/user/userPicture.js');

const loginController = {
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
        res.render('login');
    },
    /*
    postLogin: (req, res)=>
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
                       
                    }
                })
            }
        })
    },
    postRegistration: (req, res)=>{ //edit registration page for the hbs to include the error
        UserModel.findOne({'email' : req.body.email}, (err, user)=>{
            if(user)
            {
                res.render('registration', {error: "Email already exists"})
            }
        })
        if(req.body.password1 == req.body.password2)//if password and confirm password are the same
        {
            let user = new UserModel({
                _id: new mongoose.Types.ObjectId(),//not sure here
                username : req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                password : req.body.password
            })
            let card_deets = new CardModel({
                _id: new mongoose.Types.ObjectId(), //not sure here
                cardNum : req.body.cardNum,
                username : req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                expiration : req.body.expiration,
                cardType : req.body.cardType,
                cvv : req.body.cvv,     
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
        }*/
   //}
}
module.exports = loginController;