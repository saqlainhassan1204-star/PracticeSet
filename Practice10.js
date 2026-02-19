

// let element=document.getElementById("title");
// console.log(element);

// let el=document.getElementsByClassName("text");
// console.log(el[0].innertext);

// let first=document.querySelector(".text");
// console.log(first);
// let all=document.querySelectorAll(".text");

// let el=document.getElementById("first");
// el.innerText="Dom is easy";

// console.log(document);
const username="Saqlain Hassan";
const well=document.getElementById("Wellcome-msg");
well.textContent+=username==="" ? "Guest" : username;

let last=" Hassan";

let first=document.getElementById("name");
first.textContent+=last==="  "? "unknown" :last;
