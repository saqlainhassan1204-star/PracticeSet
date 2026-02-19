try{
    let age=-5;
    if(age<-5){

    
    throw new error("Age cannot  be negative");
    }
    
}
catch(e){
    console.log("error" + e.message);
}
finally{


console.log("validation is compelete");
}