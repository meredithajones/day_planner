console.log("heeeeeyyyyyyyyy you!!!");

// Setting up the variable to display the current date at the top of the planner
var dateToday = new Date();
console.log(dateToday);



// function insertDate () {
//     var dateToday = document.getElementById("forToday");
// }

//Formatting the current date to display properly using dayjs
var currentDay = dayjs().format("dddd, MMMM D YYYY")
    console.log(currentDay);

// Displaying the current date at the top when the planner opens
document.getElementById("currentDay").innerHTML = currentDay

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

//Create a for loop so the items in hoursArray get compared 
//against the variable hoursDisplay
for (var i = 0; i < hoursArray.length; i++) {

  //Convert hoursDisplay string into a number and save
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



//Setting up local storage
//assigning variables to assign storage 

// const storageContent = document.querySelector('.storage');
// const text = document.querySelector('.form-control');
// const button = document.querySelector('.bml-auto p-2 saveBtn')


// button.addEventListener(onclick, task => {
//     console.log(task.target.value)
//     text.textContent.target.value

// })

 // Put our ItemsToDo into an object 
//  var ItemsToDo = {
//     NineAM: textAreaEl[0].value.trim(),
//     TenAM: textAreaEl[1].value.trim(),
//     ElevenAM: textAreaEl[2].value.trim(),
//     TwelvePM: textAreaEl[3].value.trim(),
//     OnePM: textAreaEl[4].value.trim(),
//     TwoPM: textAreaEl[5].value.trim(),
//     ThreePM: textAreaEl[6].value.trim(),
//     FourPM: textAreaEl[7].value.trim(),
//     FivePM: textAreaEl[8].value.trim(),


//Checking to see if local storage already exists
// let items

// if (localStorage.getItem('items')) {
//   items = JSON.parse(localStorage.getItem('items'))
// } else {
//   items = []
// }

//When we reload the page, we need to see the most recent inputs from out to do list, re-displayed from local storage. 
// var lastTasks = JSON.parse(localStorage.getItem("Todo"));

//Need to create a "Todo" object when the save button is clicked. 

//Need to store the "Todo" object in local storage. 
// localStorage.setItem("Todo", JSON.stringify(Todo));


 //Creating the fucntion for the save button. When we click the button, 
 //the content for the corresponding time slot needs to save to local storage. 
        // function saveToDo(event) {
        //     event.preventDefault();

//Calling the save function for our save button 
// $(".saveBtn").on("click", saveToDo);

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
