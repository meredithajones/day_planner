
// Setting up the variable to display the current date at the top of the planner
var dateToday = new Date();

//Formatting the current date to display properly using dayjs
var currentDay = dayjs().format("dddd, MMMM D YYYY")

// Displaying the current date at the top when the planner opens
document.getElementById("currentDay").innerHTML = currentDay

//Checking to make sure that dayjs is properly set up
console.log(dayjs());

//Setting up the on click method for save btn to target
//user inputs for local storage.
$(".saveBtn").on("click", function (){
    console.log("WE WORK",$(this).parent().parent().attr("id"));
    var value =  $(this).siblings("input").val();
    var time = $(this).parent().parent().attr("id");

    //save to localstorage
    localStorage.setItem(time, value);

})


//Setting up the items that we saved in local storage to be retrieved
//on the page when we refresh our form.

$("#9 .input-group .form-control").val(localStorage.getItem("9"));
$("#10 .input-group .form-control").val(localStorage.getItem("10"));
$("#11 .input-group .form-control").val(localStorage.getItem("11"));
$("#12 .input-group .form-control").val(localStorage.getItem("12"));
$("#13 .input-group .form-control").val(localStorage.getItem("13"));
$("#14 .input-group .form-control").val(localStorage.getItem("14"));
$("#15 .input-group .form-control").val(localStorage.getItem("15"));
$("#16 .input-group .form-control").val(localStorage.getItem("16"));
$("#17 .input-group .form-control").val(localStorage.getItem("17"));


//setting up a function to capture and format the time 
//associated with each block on the schedule. 
function updateHour(){
    var currentHour = dayjs().format("HH");
    $('.timeSlot').each(function(){
       var block = $(this).children().attr("id");

//Creating the input variable to set the color attributes
//based on whether a block is in the past, present or future. 
//Had to reference multiplpe layers of children to get down to the input div. 
var input = $(this).children().children().children("input")
   if (block === currentHour) {
       input.removeClass("past")
       input.removeClass("future")
     input.addClass("present");
    
   }
   if (block < currentHour) {
    input.removeClass("present")
    input.removeClass("future")
     input.addClass("past");
   }
   if (block > currentHour) {
    input.removeClass("past")
    input.removeClass("present")
     input.addClass("future");
   }

    })
};
updateHour();
setInterval(updateHour, 1500);
