
// console.log("heeeeeyyyyyyyyy you!!!")


// When the planner opens, the current date should display at the top
var dateToday= new Date();
console.log(dateToday);

// function insertDate () {
//     var dateToday = document.getElementById("forToday");
// }

document.getElementById("forToday").innerHTML= dateToday;

console.log(dayjs())

document.getElementById("9")

//Write a function for each time slot in which if they are in the past, the section is blue-if it is in the present there 
//is no fill color, and if it is in the future, it is green. 


const oneHour = document.getElementsByClassName("timeSlot");
console.log(oneHour);

let currentHour = parseInt(moment().format('H'));

// let currentHour = dateToday

Array.from(oneHour).forEach(timeslot => {
  let
    timeSlotIdString = timeslot.id,
    timeSlotHour;
  if (timeslotIdString) {
    timeSlotHour = parseInt(timeslotIdString);
  }
  if (timeSlotHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === timeSlotHour) {
      setColor(hour, "pink");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(hour, "lightgray");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(hour, "green");
    } else {
      setColor(hour, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// hardcode "standard business hours in html"

//create color coding to signify past, present and future dates. 

// have to reference the current time to compare against the time blocks. Use jQuery methods to
//add/remove element based on time. 

// time blocks have to be editable with scheduled items for the given day. 


// save entries for given days in local storage. 
// save local storage for last once other functionality is in place!!


// when the page is refreshed 
// THEN the saved events persist and are retrieved from localStorage