inchesToFeet=(inches)=> inches/12;
console.log(inchesToFeet(42));

feetToMeters=(feet)=> feet*0.3048;
lengthInMeters=feetToMeters(60);
widthInMeters=feetToMeters(40);
console.log(`Length: ${lengthInMeters} meters, Width: ${widthInMeters} meters`);
console.log("Meters of 60*40 : " +lengthInMeters*widthInMeters);

squareFeetToAcrs=(sqFeet)=> sqFeet/43560;
totalAreaInSqFeet=27*60*40;
totalAreaInAcres = squareFeetToAcrs(totalAreaInSqFeet);
console.log(`Total area: ${totalAreaInAcres} acres`);