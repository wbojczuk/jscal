"use strict";


// Expanded Month
function expandDay(dayNum) {

    // Variable Declarations
    var expandedDayNum = calcExpandedDayNum(dayNum);

    document.getElementById("calendarWrapper").style.display = "none";
    document.getElementById("expandedDay").style.display = "block";

    // "titleHTML" is from calendar.js
    document.getElementById("expandedMonth").innerHTML = titleHTML;
    document.getElementById("expandedDayNum").innerHTML = "The " + expandedDayNum;
    if (dayEvent[dayNum] == ""){
        document.getElementById("expandedEventsList").innerHTML = "<li class='fw-bold'>Nothing scheduled for today.</li>";
    } else{
    document.getElementById("expandedEventsList").innerHTML = "<li class='fw-bold'>" + dayEvent[dayNum] + ".</li>";
    }
    }

    // Calculate Expanded Day Number/Superscript

    function calcExpandedDayNum(dayNum) {
    var str = "";
    var supST = [1, 21, 31];
    var supRD = [3, 23];
    var supND = [2, 22];
    var supTH = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30,];

    if ( supST.includes(dayNum) == true) {
        str = "st";
    } else {
        if ( supRD.includes(dayNum) == true) {
            str = "rd";
        } else {
            if ( supND.includes(dayNum) == true) {
                str = "nd";
            } else {
                if ( supTH.includes(dayNum) == true) {
                str = "th";
            } 
                
            }
        }
    }

    var tempValue = dayNum + "<sup>" + str + "</sup>";
    return tempValue;
}


// Calculate Expanded Events List

function closeExpanded() {
    document.getElementById("expandedDay").style.display = "none";
    document.getElementById("calendarWrapper").style.display = "initial";
}