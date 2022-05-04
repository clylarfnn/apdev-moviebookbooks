function checkForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;

    //fix how to get dropdown list selectors
  //  var bank = document.getElementById("payment_method");
 //  var bank_choice = bank.options[select.selectedIndex].text;

    var isValid = false;
    var all_fields = true;
    

    if(email == "")
    {
        all_fields = false;
        //document.getElementById("username").style.backgroundColor = "red";
    }
    /*else
    {
        //document.getElementById("username").style.backgroundColor = "white";
    }*/

    if(password == "")
    {
        all_fields = false;
        //document.getElementById("password1").style.backgroundColor = "red";
    }
    /*else
    {
        //document.getElementById("password1").style.backgroundColor = "white";
    }*/

    if(confirm_pw == "")
    {
        all_fields = false;
        //document.getElementById("password2").style.backgroundColor = "red";
    }
   /* else
    {
        document.getElementById("password2").style.backgroundColor = "white";
    }*/

    if(bank_choice == "")
    {
        all_fields = false;
        //document.getElementById("payment_method").style.backgroundColor = "red";
    }
    /*else
    {
        document.getElementById("password2").style.backgroundColor = "white";
    }
    */

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

    return isValid;
}
function test(){
   var bank = document.getElementById("payment_method");
    var bank_choice = bank.options[select.selectedIndex].text; 
    
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password1").value;
    var confirm_pw = document.getElementById("password2").value;
 

  //  var isValid = false;
    var all_fields = true;
    

  /* if(email == "")
    {
      //  document.getElementById("username").style.backgroundColor = "red";
        alert("POTA");
    }   */
    if(bank_choice == "")
    {
        all_fields = false;
        alert("easg");
        //document.getElementById("payment_method").style.backgroundColor = "red";
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
    
    alert("afgjhklasdg");
    return true;
}