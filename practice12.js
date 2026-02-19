let fbtn=document.getElementById("fpara");
let counttext=document.getElementById("count");


let count=0;

function Counter(){
count++;
counttext.textContent=count;
}
fbtn.addEventListener("click",Counter)