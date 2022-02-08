"use strict";



// Expanded Month
function expandDay(dayNum) {

    var currentMonthArrayy = new Array();



// Set Month Array          

if (titleHTML == "January") {
    currentMonthArrayy = january.map((x) => x);       
} else {
   if (titleHTML == "February") {
       currentMonthArrayy = february.map((x) => x);       
  } else {
   if (titleHTML == "March") {
       currentMonthArrayy = march.map((x) => x);       
  } else {
   if (titleHTML == "April") {
       currentMonthArrayy = april.map((x) => x);       
  } else {
   if (titleHTML == "May") {
       currentMonthArrayy = may.map((x) => x);       
  } else {
   if (titleHTML == "June") {
       currentMonthArrayy = june.map((x) => x);       
  } else {
   if (titleHTML == "July") {
       currentMonthArrayy = july.map((x) => x);       
  } else {
   if (titleHTML == "August") {
       currentMonthArrayy = august.map((x) => x);       
  } else {
   if (titleHTML == "September") {
       currentMonthArrayy = september.map((x) => x);       
  } else {
   if (titleHTML == "October") {
       currentMonthArrayy = october.map((x) => x);       
  } else {
   if (titleHTML == "November") {
       currentMonthArrayy = november.map((x) => x);       
  } else {
   if (titleHTML == "December") {
       currentMonthArrayy = december.map((x) => x);
               
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

    // Variable Declarations
    var expandedDayNum = calcExpandedDayNum(dayNum);
    var currentDayEvents = "";
    var currentDayLength = 0;
    var currentDayyy = (dayNum - 1);
    
    document.getElementById("calendarWrapper").style.display = "none";
    document.getElementById("expandedDay").style.display = "block";

    currentDayLength = currentMonthArrayy[currentDayyy].length;

    for (let z = 0; z < currentDayLength; z++) {
        
        if(currentMonthArrayy[currentDayyy][z] == "") {
            currentDayEvents = "<li class='fw-bold'>Nothing scheduled for today.</li>";
        } else {
        currentDayEvents += "<li class='fw-bold'>" + currentMonthArrayy[currentDayyy][z] + ".</li>";
        }

        

        


    }

    document.getElementById("expandedEventsList").innerHTML = currentDayEvents;

    // "titleHTML" is from calendar.js
    document.getElementById("expandedMonth").innerHTML = titleHTML;
    document.getElementById("expandedDayNum").innerHTML = "The " + expandedDayNum + "    <span class='year-title-html'> " + yearTitleHTML + "</span>";
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