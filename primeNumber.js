//PrimeNumber
let number = 27;
let count=0;
for(var i=0;i<number/2;i++){
    if(number%i){
        count++;
    }
}
if(count>1)
    console.log("It is not a prime number.")
else
console.log("It is prime number.")
