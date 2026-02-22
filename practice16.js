// const t1=performance.now();

// for(let i=0;i<=100;i+=2){
// let para=document.createElement("p");
// para.textContent="This is para " + i;

// document.body.appendChild(para);

// }
// const t2=performance.now();
// console.log("Total Time" + (t2-t1));


// Code2





const t=performance.now();
let div=document.createElement("div");

for(let i=0;i<=100;i++){
    let para=document.createElement("p");

para.textContent="This is para :" + i;

div.appendChild(para);

}

document.body.appendChild(div);
const t1=performance.now();

console.log(t-t1);