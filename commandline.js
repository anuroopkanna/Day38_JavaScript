//Write a program that takes a command-line arugment n and prints a table
//of the powers of 2 that a lessthan or equal to 2^n.
console.log("Print the table of 2:");
let a=20;
if(a<=20){
    for(var i=1;i<=a;i++){
        var result=2*i;
        console.log("2^"+i+"="+result);
    }
}