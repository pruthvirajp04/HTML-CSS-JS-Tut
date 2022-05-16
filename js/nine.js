
// lete t = fkdofkdfdsfmfdfsfdfokfsdfdf;

let dt = new Date();
console.log(dt);
let now = new Date(1000);
console.log(now);

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);

//Accessing the year and other things of date with the help of function
let yr = newDate.getFullYear();
console.log("The year is ", yr);

let dat = newDate.getDate();
console.log("The date is ", dat);

let month = newDate.getMonth();
console.log("The month is ", month);

let hours = newDate.getHours();
console.log("The hours is ", hours);
//   newDate.setDate(5);
//     newDate.setMinutes(43);
//     console.log(newDate)
  setInterval(updateTime, 1000);

  function updateTime() {
      time.innerHTML = new Date();
  }