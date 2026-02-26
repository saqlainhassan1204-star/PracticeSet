let get=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve({
  name:"Ali",
    age:23,
    city:"skardu"

    });
    },2000);




})
get.then(user=>{
    console.log("user name" + user.name);
    console.log("user name" + user.age);
    console.log("user name" + user.age);
})