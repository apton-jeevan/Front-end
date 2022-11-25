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

