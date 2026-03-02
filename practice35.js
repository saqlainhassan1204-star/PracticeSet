function Acoount(initialbalance){
let balance=initialbalance;

return {
    deposit:function(amount){
        balance+=amount;
    },
    getbalance:function(){
        console.log(balance);
    }
}
}

let account=Acoount(100);
account.deposit(33);
account.getbalance();
