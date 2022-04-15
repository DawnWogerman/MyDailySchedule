let now = moment().format("dddd, MMM Do YYYY");
let hourNow = parseInt(moment().format("h"));
let time = moment().format("h:mm a");

//Display current date/time in header
$("#currentDay").text(now);
$(".currentTime").text(time);


























let hourArr = [9,10,11,12,1,2,3,4,5];

if(hourArr[0]>9){
    console.log("its True");
} else {
    console.log("it's false");
};

console.log(hourArr, typeof hourArr);


console.log(now);
console.log(typeof hourNow , hourNow);

