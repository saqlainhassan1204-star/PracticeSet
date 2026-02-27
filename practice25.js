async function greet(){
    return "Hello Saqlain"
    
}

    async function show(){
        let result=await greet();
        console.log(result);
    }
show();


function Delay(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Done after two second")},6000);
        });

}
Delay();

async function Display(){
    let result=await Delay();

    console.log(result);
}
Display();