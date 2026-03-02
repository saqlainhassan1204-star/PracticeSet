function get(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve({id:2,name:"Programmer"})
},8000);
});
}
 async function  show(){

    let user=await get();
    console.log(user.name);
}
show();
async function id(params) {
    let n=await get();
    console.log(n.id);
}
id();