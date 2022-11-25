function validateform()
{
    returnval=true;
    // validating name
    let naam=document.getElementById("uname").value
    if (naam.length<=2)
    { 
        err=document.getElementById("nameerror")
        err.innerHTML="name should be atleast 3 characters"
        returnval=false;
    }
    else{
        err=document.getElementById("nameerror") //if we do not give else conditons then error once displayed will stay there even if required condtions for that particular input is met
        err.innerHTML=""

    }
    // validating email
    let mail=document.getElementById("email").value
    if (mail.length>=20)
    { 
        err=document.getElementById("emailerror")
        err.innerHTML="Email length too long[should be less than 20]"
        returnval=false;
    }
    else{
        err=document.getElementById("emailerror")
        err.innerHTML=""

    }
    // validating phone num
    let pno=document.getElementById("phonenum").value

    if(/^[0-9.,]+$/.test(pno)==false)
    {
        err=document.getElementById("numerror")
        err.innerHTML="phone no should contain only digits"
        returnval=false;
    }
     
    else if (pno.length!=10)
    { 
        err=document.getElementById("numerror")
        err.innerHTML="phone no should contain 10 characters"
        returnval=false;
    }
    else{
        err=document.getElementById("numerror")
        err.innerHTML=""

    }

      // validating password
    let pass=document.getElementById("pass").value
     if (pass.length<8)
    { 
        err=document.getElementById("passerror")
        err.innerHTML="password length should be atelast 8 characters"
        returnval=false;
    }
    else{
        err=document.getElementById("passerror")
        err.innerHTML=""

    }

     // checking whether confirm password same as password entered
     let cpass=document.getElementById("cpass").value
     if (cpass!=pass)
     { 
         err=document.getElementById("cpasserror")
         err.innerHTML="Passwords Mismatch"
         returnval=false;
     }
     else{
        err=document.getElementById("cpasserror")
        err.innerHTML=""

    }

     return returnval

    



}