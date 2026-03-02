

try{
 fetch(  "https://jsonplaceholder.typicode.com/posts?userId=1")

.then (response=>response.json())

.then(post=>{
    post.forEach(post=> {
       console.log(post.title); 
    });
});

}
catch(error){
    console.log("error"+ error)}