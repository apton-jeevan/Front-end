//for changing all rightmega to none except the first one
for(i=1;i<5;i++){
   document.getElementById("r"+ i).style="display:none"
}
document.getElementById("r0").style="display:flex"

let leftmega = document.getElementsByClassName("changemega");
let arrleft = Array.from(leftmega);
//for changing righmega when hovered on its respective leftmega
arrleft.forEach((element,index)=>{
   element.addEventListener("mouseover",()=>{

      let right=document.getElementsByClassName("rightmega");
      let arrright=Array.from(right);
      arrright.forEach((e)=>{
         if(e.id!="r" + index)
         {
            e.style="display:none";
         }
         else{
            e.style="display:flex";
         }
      })
    
   })
   
})

//for opening and closing mobile nav and toggling hamburger menu with cross button

hamicon=document.getElementById("hamburgericon")
hamicon.addEventListener("click",()=>{
   document.getElementById("hamburgericon").style="display:none";//removing hamburger icon
   document.getElementById("cross").style="display:block";//adding cross icon
   document.getElementById("mobile").style="display:block"; //adding mobile menu

})

crossicon=document.getElementById("cross")
crossicon.addEventListener("click",()=>{
   document.getElementById("hamburgericon").style="display:block"; //adding hamburger icon
   document.getElementById("cross").style="display:none";//removing cross icon
   document.getElementById("mobile").style="display:none";//removing mobile menu

})

//for validating form 

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

    if(returnval)
    {
     alert("Form has been submitted sucessfully");
     
   }
   event.preventDefault();
    if(returnval){
      //code to send email
        var params = {
          name: document.getElementById("uname").value,
          email: document.getElementById("email").value,
          Country: document.getElementById("country").value,                                                                            
          PhoneNum: document.getElementById("phonenum").value                                                                             
        };
      
        const serviceID = "service_j5kwbqk";
        const templateID = "template_c6hmtam";
          emailjs.send(serviceID, templateID, params).then(()=>{
              document.getElementById("uname").value = "";
              document.getElementById("email").value = "";
              document.getElementById("country").value = "";
              document.getElementById("phonenum").value = "";
              alert("Your message sent successfully!!")
              
          })
          return returnval;
    }
     
    }



