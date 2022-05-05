function checkForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;
    var card_num = document.getElementById("card_num").value;
    var back_num = document.getElementById("back_num").value;

    
    var bank = document.getElementById("payment_method");
    var bank_choice = bank.options[bank.selectedIndex].text; 
    var card_type = document.getElementById("card_type");
    var card_choice = card_type.options[card_type.selectedIndex].text;

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
        alert("exp month is " + exp_month);
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
        alert("exp year is " + exp_year);
        document.getElementById("exp_year").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("exp_year").style.backgroundColor = "white";
    }


    if(all_fields == true)//if all fields are filled up
    {
        if(password == confirm_pw)
        {
            alert("Welcome to MovieBookBooks, you may now login");
            location.replace("login.html");
            isValid = true;
        }
        else
        {
            document.getElementById("password1").style.backgroundColor = "red";
            document.getElementById("password2").style.backgroundColor = "red";
            alert("Please double check your password");
        }
    }
    else//if a field/s is not filled up
    {
        alert("Please fill up everything"); 
    }    

    return isValid;
}
