"use strict";


// Calendar HTML variable


// Date Variables
var currentDate = new Date();
var thisDate = new Date();
var thisMonth = thisDate.getMonth();
var thisDay = thisDate.getDay();
var thisYear = thisDate.getFullYear();
var thisDayCount = thisDate.getDate();
var currentMonthArray = new Array(31);

var tempMonth = parseInt(thisMonth);
var tempNum = -1;
var tempDate = new Date();


var currentTemp = 0;

// Days in current month variable


// Weekday title HTML variable

var titleHTML = calcMonthTitle();
var yearTitleHTML = thisYear;



// Grid Header HTML variable
var headerHTML = calcWeekdays();
var dayCount = daysInMonth();

var calendarHTML = calendarTiles();




// Calculate Weekday Title

function calcMonthTitle() {
    var monthTitle = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthTitle[thisMonth];
}
// PRINT MONTH TITLE
document.getElementById("monthTitle").innerHTML = titleHTML;
// PRINT YEAR TITLE
document.getElementById("yearTitle").innerHTML = yearTitleHTML;



// Function to calculate weekday header names
function calcWeekdays() {

    // Array of weekday names
    var tempValue = "";
    var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayNameLength = dayName.length;
    // Generate Header Tiles
    for (let i = 0; i < dayNameLength; i++) {
        tempValue += "<div class='fw-bold col weekday-header text-center'>" + dayName[i] + "</div>";
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
    var currentDayEvents = "";
    var currentDayLength = 0;


    // SET MONTH BACKGROUND
    document.getElementById("calendarWrapper").style.backgroundImage = "url('img/" + thisMonth + ".jpg')";
    document.getElementById("calendarWrapper").style.backgroundSize = "cover";
    document.getElementById("calendarWrapper").style.backgroundRepeat = "no-repeat";
    



    // Set Month Array          

    if (titleHTML == "January") {
         currentMonthArray = january.map((x) => x);       
    } else {
        if (titleHTML == "February") {
            currentMonthArray = february.map((x) => x);       
       } else {
        if (titleHTML == "March") {
            currentMonthArray = march.map((x) => x);       
       } else {
        if (titleHTML == "April") {
            currentMonthArray = april.map((x) => x);       
       } else {
        if (titleHTML == "May") {
            currentMonthArray = may.map((x) => x);       
       } else {
        if (titleHTML == "June") {
            currentMonthArray = june.map((x) => x);       
       } else {
        if (titleHTML == "July") {
            currentMonthArray = july.map((x) => x);       
       } else {
        if (titleHTML == "August") {
            currentMonthArray = august.map((x) => x);       
       } else {
        if (titleHTML == "September") {
            currentMonthArray = september.map((x) => x);       
       } else {
        if (titleHTML == "October") {
            currentMonthArray = october.map((x) => x);       
       } else {
        if (titleHTML == "November") {
            currentMonthArray = november.map((x) => x);       
       } else {
        if (titleHTML == "December") {
            currentMonthArray = december.map((x) => x);
                    
       } 
       }
       }
       }
       }
       }
       }
       }
       }
       }
       }
    }




    // Generate blank cells preceding the start date.
    calHTML += "<div class='row'>";
        for (let i = 0; i < weekDay; i++) {
            calHTML += "<div class='col day-col m-1'></div>";
        }

    // Generate cells for all days of the month.

        for (let i = 1; i <= dayCount; i++) {
            tempNum += 1;
            tempDay.setDate(i);
            weekDay = tempDay.getDay();

            currentDayEvents = "";
            

                if (weekDay === 0) {calHTML += "<div class='row'>"}


                // Calculate Current Day Events
                
                currentDayLength = currentMonthArray[tempNum].length;
                for (let z = 0; z < currentDayLength; z++) {
                    
                    
                    if (currentMonthArray[tempNum][z] != ""){
                    currentDayEvents += "<i class='bi bi-calendar-event'></i>" + currentMonthArray[tempNum][z] + "<br>";
                    }
                }


                // Test for current day
                
                if ( i === currentDate.getDate() && thisMonth == currentDate.getMonth() && thisYear == currentDate.getFullYear() ) {
                    calHTML += "<div class='col m-1 day-col highlightDay fw-bold'><a href='#' id='dayLink' class='day-link' onclick='expandDay(" + i + ");'><div>" + i + "</div><br><span class='event-tile'>" + currentDayEvents + "</span></div></a>";
                if (weekDay === 6) {calHTML += "</div>"}
                } else {
                calHTML += "<div class='col day-col m-1'><a href='#' id='dayLink' class='day-link' onclick='expandDay(" + i + ");'><div>" + i + "</div><br><span class='event-tile'>" + currentDayEvents + "</span></a></div>";
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

// Print calendarHTML
document.getElementById("calendarTable").innerHTML = calendarHTML;




// Swap Months

function forwardMonth() {
// RESET VARIABLES





currentTemp = 0;
titleHTML = "";
tempMonth += 1;
tempNum = -1;
thisDate.setMonth(tempMonth);

setTimeout(function() {
    
    if (tempMonth == 12) {
        tempMonth = 0;
    }

}, 5);




// Reloading outputs
setTimeout(function() {
    thisYear = thisDate.getFullYear();
    thisMonth = thisDate.getMonth();
    thisDay = thisDate.getDay();
    dayCount = daysInMonth();
    headerHTML = calcWeekdays();

    console.log(thisDate.getFullYear());

thisDay = thisDate.getDay();
    titleHTML = calcMonthTitle();
     

}, 5);
    setTimeout(function() {
    calendarHTML = calendarTiles();
    yearTitleHTML = thisYear;
}, 5);
 
setTimeout(function() {
    // PRINT VARIABLES

    // PRINT YEAR TITLE
    document.getElementById("yearTitle").innerHTML = yearTitleHTML;

document.getElementById("monthTitle").innerHTML = titleHTML;
document.getElementById("weekdayHeader").innerHTML = headerHTML;
document.getElementById("calendarTable").innerHTML = calendarHTML;
}, 5);

}


// Backward Month

function backMonth() {
    // RESET VARIABLES
    
    
    currentTemp = 0;
    titleHTML = "";
    tempMonth -= 1;
    tempNum = -1;
    thisDate.setMonth(tempMonth);
    
    setTimeout(function() {
        
        if (tempMonth == -1) {
            tempMonth = 11;
        }
    
    }, 5);
    
    
    
    
    // Reloading outputs
    setTimeout(function() {
        thisYear = thisDate.getFullYear();
        thisMonth = thisDate.getMonth();
        thisDay = thisDate.getDay();
        dayCount = daysInMonth();
        headerHTML = calcWeekdays();
    
        console.log(thisDate.getFullYear());
    
    thisDay = thisDate.getDay();
        titleHTML = calcMonthTitle();
         
    
    }, 5);
        setTimeout(function() {
        calendarHTML = calendarTiles();
        yearTitleHTML = thisYear;
    }, 5);
     
    setTimeout(function() {
        // PRINT VARIABLES
    
        // PRINT YEAR TITLE
        document.getElementById("yearTitle").innerHTML = yearTitleHTML;
    
    document.getElementById("monthTitle").innerHTML = titleHTML;
    document.getElementById("weekdayHeader").innerHTML = headerHTML;
    document.getElementById("calendarTable").innerHTML = calendarHTML;
    }, 5);
    
    }

