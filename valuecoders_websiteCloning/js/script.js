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

