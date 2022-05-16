
    // if statement in JS
let a = 30;
a = 2;
if(a>=18)
{
    console.log("You can drive and vote");
}
else{
    console.log("You cannot drive legally and also can't vote");
}

console.log("Now a demo for switch statement");
let s = 17;
switch(s)
{
    case 3 : console.log("This is the month of March");
    break;
    case 4 : console.log("This is the month of April");
    break;
    case 5 : console.log("This is the month of May");
    break;
    case 6 : console.log("This is the month of June");
    break;
    case 7 : console.log("This is the month of July");
    break;
    case 8 : console.log("This is the month of August");
    break;

    default : console.log("Invalid month");
    // It will output July as the s is defined to 7 which will always display July as a month.


console.log("A demo for the array display")


    let defenceEntries = {
             entriesAfterTwelth: "NDA,TES,NAVY-TECH",
             entriesAfterGraduation: "UES,NCC-SP,CDS,SSC-Tech,INET,AFCAT,TGC",
             
         }
         console.log(defenceEntries);

}
// now soritng in increasing order.
let elementsIncreasing  = [6,5,4,3,2,1];
elementsIncreasing = elementsIncreasing.sort();
console.log(elementsIncreasing);

