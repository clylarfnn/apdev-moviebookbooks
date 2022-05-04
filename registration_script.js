function checkForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;
    var card_num = document.getElementById("card_num").value;
    var back_num = document.getElementById("back_num").value;

    //fix how to get dropdown list selectors
  //  var bank = document.getElementById("payment_method");
 //  var bank_choice = bank.options[bank.selectedIndex].text; //or value?

    var isValid = false; //smth is up with this lol
    var all_fields = true; //smth is up with this too ajhkgfl
    
    if(email == "")
    {
        all_fields = false;
        document.getElementById("email").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("email").style.backgroundColor = "white";
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
 
  /*  if(bank_choice == "")
    {
        all_fields = false;
        //document.getElementById("payment_method").style.backgroundColor = "red";
    }
 */
    if(card_num == "")
    {
        all_fields = false;
        document.getElementById("card_num").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("card_num").style.backgroundColor = "white";
    }

    if(back_num == "")
    {
        all_fields = false;
        document.getElementById("back_num").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("back_num").style.backgroundColor = "white";
    }

    if(all_fields == true)
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
    else
    {
        alert("Please fill up everything"); 
    }    

    return isValid;
}
function test(){
   //var bank = document.getElementById("payment_method");
    //var bank_choice = bank.options[select.selectedIndex].value; 
    
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;
    var back_num = document.getElementById("back_num").value;
 

    var isValid = false;
    var all_fields = true;
    

 
    if(email == "")
    {
        all_fields = false;
        alert("easg");
        //document.getElementById("payment_method").style.backgroundColor = "red";
    } 
    if(password == "")
    {
        all_fields = false;
        document.getElementById("password1").style.backgroundColor = "red";
    }
    /*else
    {
        //document.getElementById("password1").style.backgroundColor = "white";
    }*/

    if(confirm_pw == "")
    {
        all_fields = false;
        document.getElementById("password2").style.backgroundColor = "red";
    }
    if(all_fields == true)
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
   /* {
        all_fields = false;
        document.getElementById("username").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("username").style.backgroundColor = "white";
    }
*/
    
  //  alert("afgjhklasdg");
    return true;
}