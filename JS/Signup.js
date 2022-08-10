function myFunction()
{
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    var pw1 = document.forms["myForm"]["Pass1"].value;


    var Un=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (un == "" || !Un.test(un)) {

    window.alert("Please enter a valid e-mail address.");

    un.focus();

    return false;

    }
    else if(pw == ""|| pw.length <6) {

    alert("Please Enter Valid Password");

    pw.focus();

    return false;
    }
    else if(pw != pw1 ||pw1.length <6) {

        alert("Password Doesnt Match!");
    
        pw.focus();
    
        return false;
        }


    else if(un== " " || pw== "123456"){
            window.location.href="login.html";
        }
    
    else
    {
        alert("Invalid UserName and Password")
    }
}
function myFunction2()
{
    alert("Are You Sure?")
    window.location.href="Login.html";
}