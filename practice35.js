function bankAccoun(){
    let privatebalace=45;

    return function(){
        console.log(privatebalace);

    }

}
let balance=bankAccoun();
balance();