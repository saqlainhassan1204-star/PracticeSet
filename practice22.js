let Promisefirst= new Promise((resolve,reject) =>{

    console.log("Task completed");
    resolve(2000);

}) ;

Promisefirst.then((message)=>{
    console.log("message" + messsage)
})

