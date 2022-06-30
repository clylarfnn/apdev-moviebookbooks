function checkForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;
    var card_num = document.getElementById("card_num").value;
    var back_num = document.getElementById("back_num").value;
    var contact_num = document.getElementById("contect_num").value;
    var birthday = document.getElementById("birthday").value

    var bank = document.getElementById("payment_method");
    var bank_choice = bank.options[bank.selectedIndex].text;
    var card_type = document.getElementById("card_type");
    var card_choice = card_type.options[card_type.selectedIndex].text;
    var gender = document.getElementById("gender");
    var gender_choice = gender.options[gender.selectedIndex].text;

    var exp_month = parseInt(document.getElementById("exp_month").value);
    var exp_year = parseInt(document.getElementById("exp_year").value);

    var isValid = false;
    var all_fields = true;

    //checking if fields are left blank or not
    //email
    if(email == "")
    {
        all_fields = false;
        document.getElementById("email").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("email").style.backgroundColor = "white";
    }


    //password
    if(password == "")
    {
        all_fields = false;
        document.getElementById("password1").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("password1").style.backgroundColor = "white";
    }


    //confirm password
    if(confirm_pw == "")
    {
        all_fields = false;
        document.getElementById("password2").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("password2").style.backgroundColor = "white";
    }

    //bank choice
    if(bank_choice == "")
    {
        all_fields = false;
        document.getElementById("payment_method").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("payment_method").style.backgroundColor = "white";
    }

    //card type
    if(card_choice == "")
    {
        all_fields = false;
        document.getElementById("card_type").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("card_type").style.backgroundColor = "white";
    }

    //card number
    if(card_num == "")
    {
        all_fields = false;
        document.getElementById("card_num").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("card_num").style.backgroundColor = "white";
    }

    //cvv
    if(back_num == "")
    {
        all_fields = false;
        document.getElementById("back_num").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("back_num").style.backgroundColor = "white";
    }

    //expiration month
    if(Number.isNaN(exp_month))
    {
        all_fields = false;
        document.getElementById("exp_month").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("exp_month").style.backgroundColor = "white";
    }

    //expiration year
    if(Number.isNaN(exp_year))
    {
        all_fields = false;
        document.getElementById("exp_year").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("exp_year").style.backgroundColor = "white";
    }
/*
    //gender
    if(gender_choice == "")
    {
        all_fields = false;
        document.getElementById("gender").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("gender").style.backgroundColor = "white";
    }
    
    if(contact_num == "")
    {
        all_fields = false;
        document.getElementById("contact_num").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("contact_num").style.backgroundColor = "white";
    }
    
    if(!Date.parse(birthday))
    {
        all_fields = false;
        document.getElementById("birthday").style.backgroundColor = "red"
    }
    else
    {
        document.getElementById("exp_year").style.backgroundColor = "white";
    }*/

    if(all_fields == true)//if all fields are filled up
    {
        if(password == confirm_pw)
        {
            alert("Welcome to MovieBookBooks, You will be asked to login");
            //location.replace("/login");
            isValid = true;
        }
        else
        {
            document.getElementById("password1").style.backgroundColor = "red";
            document.getElementById("password2").style.backgroundColor = "red";
            //alert("Please double check your password");
        }
    }
    else//if a field/s is not filled up
    {
        alert("Please fill up everything");
    }

    return isValid;
}

function submitUser(){
    var username = $("#username").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var gender = $("#gender").val();
    var birthday = $("#birthday").val();
    var contactNum = $("#contactNum").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var picture = $("#picture").val();
    var password2 = $("#password2").val();
    
    $.get('/submituser'), {
        username: username,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthday: birthday,
        contactNum: contactNum,
        email: email,
        password: password,
        picture: picture,
        password2: password2}, function (result) {

    }
}