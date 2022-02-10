"use strict";

// TO VIEW MONTHS

function viewMonths() {
    document.getElementById("calendarWrapper").style.display = "none";
    document.getElementById("expandedMonths").style.display = "flex";
}



function setSelectedMonth(selectedMonth) {
// RESETTING VARIABLES

currentTemp = 0;
titleHTML = "";
tempNum = -1;
tempMonth = selectedMonth;
thisDate.setMonth(selectedMonth);


    
    // Reloading outputs
setTimeout(function() {
    thisYear = thisDate.getFullYear();
    thisMonth = thisDate.getMonth();
    thisDay = thisDate.getDay();
    dayCount = daysInMonth();
    headerHTML = calcWeekdays();

}, 5);


    
    setTimeout(function() {
        titleHTML = calcMonthTitle();
    calendarHTML = calendarTiles();
}, 5);
 
setTimeout(function() {
    // PRINT VARIABLES

    // PRINT YEAR TITLE
    document.getElementById("yearTitle").innerHTML = yearTitleHTML;

document.getElementById("monthTitle").innerHTML = titleHTML;
document.getElementById("weekdayHeader").innerHTML = headerHTML;
document.getElementById("calendarTable").innerHTML = calendarHTML;
}, 5);


document.getElementById("expandedMonths").style.display = "none";
document.getElementById("calendarWrapper").style.display = "block";
}