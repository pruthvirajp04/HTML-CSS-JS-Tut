
        
// alert("This is just a tutorial for alert and hope we will learn very much");


let name  = prompt("What is your name. If above 5 star on codechef then click ok and enter your name otherwise leave");


let rating  = prompt("What is your current rating ");


let star  = prompt("How many star coder you are on codechef ");


let coderConfirm = confirm("Are you a 5 star coder");
if(coderConfirm)
{
        console.log(name + "  have successfully entered the website");
        console.log(name + "  is also a 5 star coder on codechef with current rating of " + rating + " and star as " + star+" coder ");
}
else{
    console.log(name + " was not able to enter the website");
}


