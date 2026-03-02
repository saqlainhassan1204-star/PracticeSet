

function payment(success){
    
return new Promise((resolve,reject)=>{
setTimeout(()=>{
success? resolve("Payment Success")
:reject("Failed")},4000);

});
}

async function checkout(){
    try{
let check=await payment(false);
console.log(check);
    }
    catch(e){
        console.log(e);
    }
}
checkout();