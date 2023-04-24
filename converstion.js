// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
//  1. Feet to Inch 3. Inch to Feet
//  2. Feet to Meter 4. Meter to Feet
function Conversion(centi) {
    var inch = 0.3937 * centi;
    var feet = 0.0328 * centi;
     inch=inch.toFixed(2);
     feet=feet.toFixed(2);
   document.write("Inches is: \n" + inch + "<br>");
   document.write("Feet is: " + feet);  
   return 0;
}
centi=10;
Conversion(centi);