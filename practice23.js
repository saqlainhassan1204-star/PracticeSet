function orderPizza(){
    return new Promise(function(resolve,reject){
        let pizzready=true;
        if (pizzready){
            resolve("pizza delivered");
        }
        else{
            reject("Order Cancelled");
        }
    });
}

orderPizza()
    .then(result =>{
     console.log("result" + result);   
    })
orderPizza()
. catch(result=>{
    console.log("result" + result);
});