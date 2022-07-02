const UserModel = require("../model/user/user.js");
const CardModel = require("../model/user/card.js");

const userController = {
    editUser: (req, res) => {
        var username = req.cookies.username;

        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var gender = req.body.gender;
        var birthday = req.body.birthday;
        var contactNum = req.body.contactNum;
        var email = req.body.email;
        var password = req.body.password;
        var picture = req.body.picture;

        UserModel.findOne({'username': username}, (err, user)=>{
            console.log(user);
            if(firstName != null){
                user.firstName = firstName;
            }
            if(lastName != null){
                user.lastName = lastName;
            }
            if(gender != null){
                user.gender = gender;
            }
            if(birthday != null){
                user.birthday = birthday;
            }
            if(contactNum != null){
                user.contactNum = contactNum;
            }
            if(email != null){
                UserModel.findOne({'email': email}, (err, user2)=>{
                    if(user2 = null){
                        user.email = email;
                    } 
                    else{
                        res.render('userEditProfile',{
                        error: "Email already exists in a different account"
                        })  
                    }
                })
            }
            if(password != null){
                user.password = password;
            }
            if(picture != null){
                user.picture = picture;
            }
        })

        res.render('userEditProfile');
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