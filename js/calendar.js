"use strict";


// Calendar HTML variable


// Date Variables
var thisDate = new Date();
var thisMonth = thisDate.getMonth();
var thisDay = thisDate.getDay();
var thisYear = thisDate.getFullYear();
var thisDayCount = thisDate.getDate();


var currentTemp = 0;

// Days in current month variable


// Weekday title HTML variable

var titleHTML = calcMonthTitle();

// DayNumber Title HTML Variable

var titleDayNumHTML = calcDayNumTitle();

// Grid Header HTML variable
var headerHTML = calcWeekdays();
var dayCount = daysInMonth();

var calendarHTML = calendarTiles();




// Calculate Weekday Title

function calcMonthTitle() {
    var monthTitle = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthTitle[thisMonth];
}
document.getElementById("monthTitle").innerHTML = titleHTML;


// Calculate Day Number Title

function calcDayNumTitle() {
    var str = "";

    // Calc superscript to use
    var supST = [1, 21, 31];
    var supRD = [3, 23];
    var supND = [2, 22];
    var supTH = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30,];

    if ( supST.includes(thisDayCount) == true) {
        str = "st";
    } else {
        if ( supRD.includes(thisDayCount) == true) {
            str = "rd";
        } else {
            if ( supND.includes(thisDayCount) == true) {
                str = "nd";
            } else {
                if ( supTH.includes(thisDayCount) == true) {
                str = "th";
            } 
                
            }
        }
    }

    var tempValue = thisDayCount + "<sup>" + str + "</sup>";
    return tempValue;
}
document.getElementById("titleDayNumber").innerHTML = titleDayNumHTML;


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
    var tempDay = new Date(thisYear, thisMonth);

    var weekDay = firstDay.getDay();

    // Generate blank cells preceding the start date.
    calHTML += "<div class='row'>";
        for (let i = 0; i < weekDay; i++) {
            calHTML += "<div class='col day-col m-1'></div>";
        }

    // Generate cells for all days of the month.

        for (let i = 1; i <= dayCount; i++) {
            tempDay.setDate(i);
            weekDay = tempDay.getDay();

                if (weekDay === 0) {calHTML += "<div class='row'>"}
                
                // Test for current day
                
                if ( i === thisDayCount) {
                    calHTML += "<div class='col m-1 day-col highlightDay fw-bold'><a href='#' id='dayLink' class='day-link' onclick='expandDay(" + i + ");'>" + i + dayEvent[i] + "</div></a>";
                if (weekDay === 6) {calHTML += "</div>"}
                } else {
                calHTML += "<div class='col day-col m-1'><a href='#' id='dayLink' class='day-link' onclick='expandDay(" + i + ");'>" + i + dayEvent[i] + "</a></div>";
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