let now = moment().format("dddd, MMM Do YYYY");
let hourNow = moment().format("ha");
let time = moment().format("h:mm a");


//Display current date/time in header
$("#currentDay").text(now);
$(".currentTime").text(time);


console.log(hourNow);


//set class id's to format each row by comparing id's to current time
$(".hourdiv").each(function(){
    let hourDiv = $(this).attr("id");

    if(hourNow == hourDiv){
       $(this).addClass("present");
       console.log(hourDiv);
   }
   else if(hourNow < hourDiv){
       $(this).removeClass("present");
       $(this).addClass("future");
   }
   else if(hourNow > hourDiv){
       $(this).removeClass("future");
       $(this).addClass("past");
   }
});



//save tasks and set to local storage
$(".saveBtn").click(function(event){
    event.preventDefault();
    let task = $(this).siblings(".hour").val();
    console.log(task);
})

















