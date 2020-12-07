console.log("heeeeeyyyyyyyyy you!!!");

// Setting up the variable to display the current date at the top of the planner
var dateToday = new Date();
console.log(dateToday);



// function insertDate () {
//     var dateToday = document.getElementById("forToday");
// }

//Formatting the current date to display properly using dayjs
var currentDay = dayjs().format("ddd")

// Displaying the current date at the top when the planner opens
document.getElementById("forToday").innerHTML = dateToday
document.getElementById("forToday").format = dayjs().format("HH");

console.log(dayjs(dateToday).format('ddd' ));

console.log(dayjs());

document.getElementById("9");

// var currentDay = moment().format("dddd Do MMMM YYYY");

//Creating our variables
var timeSlot = $(".timeSlot");
var hoursDisplay = dayjs().format("HH");
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var InputTextEl = $("inputText");

//Connect time colums to moment.js so we can color code our tasks columns according to
//past, present, future

//Create a for loop so all hoursArray are compared against the variable hoursDisplay
for (var i = 0; i < hoursArray.length; i++) {

  //Convert the hoursDisplay string into a number and save
  // it in hoursDisplayType.

  var hoursDisplayType = parseInt(hoursDisplay);
  var AvailableHours = hoursArray[i];
  var ScheduleLoop = hoursDisplay[i];

  if (AvailableHours === hoursDisplayType) {
    $(ScheduleLoop).addClass("present");
  }
  if (AvailableHours < hoursDisplay) {
    $(ScheduleLoop).addClass("past");
  }
  if (AvailableHours > hoursDisplay) {
    $(ScheduleLoop).addClass("future");
  }
}

console.log(hoursDisplayType)



//Checking to see if local storage already exists
let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

//Write a function for each time slot in which if they are in the past, the section is blue-if it is in the present there
//is no fill color, and if it is in the future, it is green.

// const oneHour = document.getElementsByClassName("timeSlot");
// console.log(oneHour);

// let currentHour = parseInt(dayjs(dateToday).format('H'));
// var timeSlotHour =

// Array.from(oneHour).forEach(timeSlot => {
//   let
//     timeSlotIdString = timeSlot.id,
//     timeSlotHour;
//   if (timeSlotIdString) {
//     timeSlotHour = parseInt(timeSlotIdString);
//   }
//   if (timeSlotHour) {
//     // Compares row id to current hour and sets color accordingly
//     if (currentHour === timeSlotHour) {
//       setColor(timeSlot, "pink");
//     } else if ((currentHour < timeSlotHour) && (currentHour > timeSlotHour - 6)) {
//       setColor(timeSlot, "lightgray");
//     } else if ((currentHour > timeSlotHour) && (currentHour < timeSlotHour + 6)) {
//       setColor(timeSlot, "blue");
//     } else {
//       setColor(timeSlot, "white");
//     }
//   }
// });

// function setColor(element, color) {
//   element.style.backgroundColor = color;
// }

// hardcode "standard business hours in html"

//create color coding to signify past, present and future dates.

// have to reference the current time to compare against the time blocks. Use jQuery methods to
//add/remove element based on time.

// time blocks have to be editable with scheduled items for the given day.

// save entries for given days in local storage.
// save local storage for last once other functionality is in place!!

// when the page is refreshed
// THEN the saved events persist and are retrieved from localStorage
