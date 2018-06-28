const todayDate = new Date();
let dateToday;
dateToday = todayDate;

console.log(dateToday);

let hours;
let minutes;
let seconds;

hours = todayDate.getHours();
console.log(hours);
document.getElementById('hourToday').innerHTML = hours;


minutes = todayDate.getMinutes();
console.log(minutes);
document.getElementById('minuteToday').innerHTML = minutes;


seconds = todayDate.getSeconds();
console.log(seconds);
document.getElementById('secondToday').innerHTML = seconds;

// Set Refresh Time After Every 1 second : // ===================================================
// setTimeout(function(){
//    window.location.reload(1);
// }, 1000);
