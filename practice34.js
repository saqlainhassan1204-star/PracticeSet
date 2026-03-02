function counter(){
    let count=0;

    return function(){
        count++;
        console.log(count);
    }
}
let counter1=counter();
counter1();
counter1();
counter1();