let firstpromise=new Promise((resolve,reject) =>{


 setTimeout(function say(){
    console.log("Iam Fronted Devoloper");
},3000);

   resolve();
});

let secondPromise=new Promise((resolve,reject) => {
    let success=true;
    if (success){
        resolve("Fullfilled");
    }
    else{
         reject("Erorr");
    }
})
secondPromise.then(message =>{
console.log("Fullfiled ka mesage"+ message);
});
secondPromise.catch((message)){
    console,log("Rejected ka mesage" +  message)
};
