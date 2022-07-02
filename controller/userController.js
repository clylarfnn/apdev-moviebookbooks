const UserModel = require("../model/user/user.js");

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

        console.log(firstName);

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
                        res.render('userEdit',{
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

        res.render('userEdit');
    }
}

module.exports = userController;