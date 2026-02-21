let div=document.getElementById("div");


function Handle(event){

    alert("This is click is:" + event.target.textContent);
}
div.addEventListener("click", Handle);





let fpara=document.getElementById("fpara");

  let btn1=document.getElementById("btn");



function First(){
  
fpara.style.color="red";    
}


btn1.addEventListener("click", First)








let btn2=document.getElementById("two");
let spara=document.getElementById("spara");
function Second(){
    spara.style.color= "blue";
}



let btn3=document.getElementById("Three");
let tpara=document.getElementById("tpara");
function three(){
    tpara.style.color= "green";
}

btn3.addEventListener("click",three);


let btn4=document.getElementById("Four");
let para=document.getElementById("para");
function fo(){
    para.style.color= "blue";
}


btn4.addEventListener("click",fo);

