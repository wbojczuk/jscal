"use strict";

// Header HTML variable
var headerHTML = calcWeekdays();


// Calendar HTML variable


// Date Variables
var thisDate = new Date();
var thisMonth = thisDate.getMonth();
var thisDay = thisDate.getDay();
var thisYear = thisDate.getFullYear();

// Days in current month variable
var dayCount = daysInMonth();

var calendarHTML = calendarTiles();




// Function to calculate weekday header names
function calcWeekdays() {

    // Array of weekday names
    var tempValue = "";
    var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayNameLength = dayName.length;
    // Generate Header Tiles
    for (let i = 0; i < dayNameLength; i++) {
        tempValue += "<div class='col weekday-header text-center'>" + dayName[i] + "</div>";
    }
    return tempValue;
}

// PRINT TO HEADER ROW
document.getElementById("weekdayHeader").innerHTML = headerHTML;





// Function to calc days in the current month
    function daysInMonth() {

// Array containing the days of the month
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Leap Year checks
        if (thisYear % 4 === 0) {
           if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            monthDays[1] = 29;
           }
        }
    var tempValue = monthDays[thisMonth];
return tempValue;
}



// Function for calendar day tiles


function calendarTiles() {
    // Determine starting day of the month.
    var calHTML = "";
    var firstDay = new Date(thisYear, thisMonth, 1);

    var weekDay = firstDay.getDay();

    // Generate blank cells preceding the start date.
    calHTML += "<div class='row'>";
        for (let i = 0; i < weekDay; i++) {
            calHTML += "<div class='col day-col m-1'></div>";
        }

    // Generate cells for all days of the month.

        for (let i = 1; i <= dayCount; i++) {
            firstDay.setDate(i);
            weekDay = firstDay.getDay();

                if (weekDay === 0) {calHTML += "<div class='row'>"}
                
                // Test for current day
                
                if ((i + 1) === thisDay) {
                    calHTML += "<div class='col m-1 day-col highlightDay fw-bold'>" + i + dayEvent[i] + "</div>";
                if (weekDay === 6) {calHTML += "</div>"}
                } else {
                calHTML += "<div class='col day-col m-1'>" + i + dayEvent[i] + "</div>";
                if (weekDay === 6) {calHTML += "</div>"}
            }
        }

        // Generate Cells after Days of the month

        var lastDay = new Date(thisYear, thisMonth, dayCount);
        var lastWeekDay = lastDay.getDay();
            if (lastWeekDay != 6){
                for (let i = 6; i > lastWeekDay; i--) {
                    calHTML += "<div class='col day-col m-1'></div>";
                }
                calHTML += "</div>";
            }

        return calHTML;
}

// Print Testing
document.getElementById("calendarTable").innerHTML = calendarHTML;
document.getElementById("printTest").innerHTML = dayCount;