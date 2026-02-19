// let heading=document.getElementById("myheading");
// heading.style.backgroundColor="blue";
// heading.style.alignItems=" centre";


// console.log(heading);

let fruits=document.getElementsByClassName("fruits");
console.log(fruits);

// fruits[0].style.backgroundColor="green";
// fruits[1].style.backgroundColor="blue";
// fruits[2].style.backgroundColor="red";
for(let fruit of fruits){
    fruit.style.backgroundColor="red";
}

// // Array.from(fruits). forEach(element=> {
// //     element.style.backgroundColor="";
// // });


let h4Element=document.getElementsByTagName("h4");

console.log(h4Element);
h4Element[0].style.backgroundColor="Green";
h4Element[1].style.backgroundColor="blue";

// for(let first of h4Element){
//     first.style.backgroundColor="yellow";
// }

let lielement=document.getElementsByTagName("li");

console.log(lielement);

// // for(let second of lielement){
// //     second.style.backgroundColor="Pink";
// // // }
// // Array.from(h4Element).forEach(h4Element=> {
// //     h4Element.style.backgroundColor=" green";

// })
Array.from(lielement).forEach(lielement =>{
    lielement.style.backgroundColor="blue";
})
// const q=document.querySelectorAll(".fruits");
// console.log(q);

// // q[0].style.backgroundColor="red";

// // q[1].style.backgroundColor="yellow";
// q.forEach(n=>{
//     n.style.backgroundColor="red";
// })