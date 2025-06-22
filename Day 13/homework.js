// DD:MM:YYYY - HH:MM:SS
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();

if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;
if (hour < 10) hour = "0" + hour;
if (mins < 10) mins = "0" + mins;
if (sec < 10) sec = "0" + sec;

console.log(
  day + ":" + month + ":" + year + " - " + hour + ":" + mins + ":" + sec
);

// Template Literals
console.log(`${day}:${month}:${year} - ${hour}:${mins}:${sec}`);
