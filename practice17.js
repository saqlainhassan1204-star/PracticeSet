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
