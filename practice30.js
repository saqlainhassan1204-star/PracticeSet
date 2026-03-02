fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(user=>{
    user.forEach(element => {
        console.log(element.name);
    });
})
.catch(error=>console.log("error" + error))



    