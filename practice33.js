function storeName(){
    let name="ahmed";
    return function(){
        console.log(name);
    }
}

let New=storeName();
New();
