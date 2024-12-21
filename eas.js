/** Set divs fro grid*/
let grid=document.querySelector(".gridbox");
for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
        let innerdivs=document.createElement("div");
        innerdivs.classList.add('content');
        innerdivs.textContent="";
        grid.appendChild(innerdivs);
       
        
     }
     
    
}
/**CHANGE color on event */
let divChange=document.querySelectorAll(".content");
divChange.forEach(divChange=>{
divChange.addEventListener("mouseover",()=>{
 divChange.classList.add("permahover");
 
});


});

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    divChange.forEach(div => {
        div.classList.remove("permahover");
    });
});

  
   
