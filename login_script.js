function checkForm(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;


    var isValid = false;
    var all_fields = true;
    

    if(username == "")
    {
        all_fields = false;
        document.getElementById("username").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("username").style.backgroundColor = "white";
    }

    if(password == "")
    {
        all_fields = false;
        document.getElementById("password1").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("password1").style.backgroundColor = "white";
    }

    if(confirm_pw == "")
    {
        all_fields = false;
        document.getElementById("password2").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("password2").style.backgroundColor = "white";
    }

    if(all_fields == true)
    {
        if(password == confirm_pw)
        {
            alert("Welcome to MovieBookBooks");
            isValid = true;
        }
        else
        {
            document.getElementById("password1").style.backgroundColor = "red";
            document.getElementById("password2").style.backgroundColor = "red";
        }
    }

    return isValid;
}