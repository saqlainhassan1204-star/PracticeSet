fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>response.json)

.then(user=>{
    user.forEach(user => {
        console.log("user" + user.name);
    });
});

