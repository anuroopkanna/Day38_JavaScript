//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
// 1. a + b * c 3. c + a / b 2. a % b + c 4. a * b + c
//var num=prompt("Enter the valuesof abc: ");
let a=20,b=15,c=25;
function One(){
    return a+b*c;
}
function Two(){
    return a%b+c;
}
function Three(){
    return c+a/b;
}
function Four(){
    return a*b+c;
}
console.log(One());
console.log(Two());
console.log(Three());
console.log(Four());
