let num=123456;

let r=0;
while (num>0){
    digit=num%10;

r=r*10+digit;

num=Math.floor(num/10);
}
console.log(r);