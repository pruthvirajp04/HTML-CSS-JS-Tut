
//In this , forEach , while and loops are to be done.

// now a simple for loop for displaying a number multiple times 
//     let i=1;
// for (let i = 0; i <5; i++) {
//     console.log(i);

// }
//Now let us display the sum upto a number let's say 100
// let i=0;
// let s =0;
// for (let i = 1; i <= 100; i++) {
//    s+=i;

// }
// console.log(s); // Displaying the sum

// let's display the array 
let defenceExans = ["NDA (10+2 Entry)","CDS","AFCAT","INET","TES (10+2 Entry)","SSC-Tech"];
for (let index = 0; index < defenceExans.length; index++) {
console.log("The exams through which one can join the armed forces as an officer is : " + defenceExans[index]);

}
let numbers  = ["6" ,"4","3","0","1"];
for(element of numbers)
{
console.log("The numbers are :" + numbers);


}


// defenceExans = defenceExans.sort();
// console.log(defenceExans);



let student = {
name : "James" ,
standard : 12,
grade : 10,
responsibility : "Monitor"
}
for(key in student)
{
console.log(`The ${key} of the student is ${student[key]} `);
}

let count =0;
while(count!=2)
{
console.log(`The value of the count now is ${count}`);
count +=1;
}




