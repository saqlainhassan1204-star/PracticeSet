// let Promisefirst= new Promise((resolve,reject) =>{

//     console.log("Task completed");
//     resolve(2000);

// }) ;

// Promisefirst.then(message)=>{
//     console.log("message" + messsage)
// }

let secondPromise= new Promise((resolve,reject) =>{
      console.log("Error Accured" + Error);
      reject(1000);
});

secondPromise.catch(result=>{

console.log("result" + result);

});

