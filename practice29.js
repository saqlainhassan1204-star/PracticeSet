async  function Task(name,time) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done"+ name)},time);
        });
    
}

async function runtask(){
    let work=await Task("Task A",3000);
       let work2=await Task(" Task B",3000);

       console.log(work);
       console.log(work2);
    

}
runtask();