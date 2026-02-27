async function Pizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza Delivered")},4000);});
        
        }

 async function Pending (){
    let pizza=await Pizza();
    console.log("Pizza is in Pending");

    console.log(pizza);
 }  

 Pending();

 async function Preparing (){
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Pizza is praparing")},6000);
    

});
 }

 async function wait(){
    let wait=await Preparing();
    console.log(wait);
        
    

 }

wait();




    
