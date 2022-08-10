function myFunction()
{
    var name = document.forms["myForm"]["name"].value;
    var un = document.forms["myForm"]["Uname"].value;
    var phone = document.forms["myForm"]["Phone"].value;
    var sub = document.forms["myForm"]["Sub"].value;
    var msg = document.forms["myForm"]["msg"].value;


    var Un=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    

    if (name == "") {

        window.alert("Please!Enter Valid Name.");
    
        name.focus();
    
        return false;
        }

    else if (un == "" || !Un.test(un)) {

    window.alert("Please enter a valid e-mail address.");

    un.focus();

    return false;

    }
    else if(phone == ""|| phone.length <10) {

    window.alert("Please Enter Valid Number");

    phone.focus();

    return false;
    }
    
    else if(sub  == "" ) {

       window.alert("please Enter Valid Subject");
    
        sub.focus();
    
        return false;
    }
    else if(msg  == "" ) {

        window.alert("please Enter Valid Message");
        
            msg.focus();
        
            return false;
            }

            // else if(un == " "){
            //     window.location.href="login.html";
            // }
        
    else
    {
        alert("Message Sent!SuccessFully!")
        window.location.href="login.html";
    }
}
