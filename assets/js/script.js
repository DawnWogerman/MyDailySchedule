let now = moment().format("dddd, MMM Do YYYY");
let hourNow = parseInt(moment().format("h"));
let time = moment().format("h:mm a");
let hourTask = $("textarea");

//Display current date/time in header
$("#currentDay").text(now);
$(".currentTime").text(time);


























