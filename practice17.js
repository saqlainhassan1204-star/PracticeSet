const t1=performance.now();


function palindrome(num){
    let o=num;
    reverse=0;

while(num>0){
d=num%10;
reverse=reverse*10+d;
num=Math.floor(num/10);}

return o===reverse;

}

console.log(palindrome(121));

const t2 =performance.now();


console.log("Total" + (t2-t1))
