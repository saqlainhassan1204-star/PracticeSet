

function payment(success){
    
return new Promise((resolve,reject)=>{
setTimeout(()=>{
success? resolve("payment successfull")
:reject("PAyment fail")},4000);

});


}

async function checkout(){
    try{
let check=await payment(true);
console.log(check);
    }
    catch(e){
        console.log(e);
    }
}
checkout();