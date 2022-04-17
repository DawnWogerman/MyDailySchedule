let now = moment().format("dddd, MMM Do YYYY");
let hourNow = moment().format("HH");
let time = moment().format("h:mm a");

//Display current date/time in header
$("#currentDay").text(now);
$(".currentTime").text(time);

//set class id's to format each row by comparing id's to current time
$(".hourdiv").each(function(){
    let hourDiv = $(this).attr("id");
    console.log(hourDiv);
    if(hourNow == hourDiv){
       $(this).addClass("present");
       console.log(hourDiv);
   }
   else if(hourNow < hourDiv){
       $(this).removeClass("present");
       $(this).addClass("future");
   }
   else{
       $(this).addClass("past");
   }
});

//save tasks and set to local storage
$(".saveBtn").click(function(event){
    event.preventDefault();
    let task = $(this).siblings("textarea").val();
    let id = $(this).parent().attr("id");
    localStorage.setItem(id, task);
});

//Store items in local storage so values remain until cleared
$("#09").children("textare").val(localStorage.getItem("09"));
$("#10").children("textare").val(localStorage.getItem("10"));
$("#11").children("textarea").val(localStorage.getItem("11"));
$("#12").children("textare").val(localStorage.getItem("12"));
$("#13").children("textare").val(localStorage.getItem("13"));
$("#14").children("textare").val(localStorage.getItem("14"));
$("#15").children("textare").val(localStorage.getItem("15"));
$("#16").children("textare").val(localStorage.getItem("16"));
$("#17").children("textare").val(localStorage.getItem("17"));

















