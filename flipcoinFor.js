//flip coin
let Heads=0;
let Tails=0;
while(Heads!=11 && Tails!==11){
    let coin=Math.floor(Math.random()*2)

if(coin ==1)
Heads++;
else
Tails++;
console.log(`Result: ${coin}. Score: Heads ${Heads}, Tails ${Tails}`)
}
if(Heads===11)
console.log("Its heads " + Heads);
else
console.log("Its tails " + Tails);