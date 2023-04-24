//extned Prime Number
let number = 97;
let count=0;
for(var i=0;i<number/2;i++){
    if(number%i===0){
        count++;
    }
}
if(count>1)
    console.log("It is not a prime number.")
else
console.log("It is  a prime number.")