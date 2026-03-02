function Display(){
let name="ali";

return function(){
    console.log("name="+ name);
};

}
function show(){
    let name1="ahmed";
    return function(){
        console.log(name1);
    }
}

function print(){
    let name2="zulfiqar";
    return function(){
        console.log(name2);

    }
}

let n1=Display();
n1();
let n2=show();
n2();
let n3=print();
n3();