"use strict";

// TO VIEW/GENERATE YEARS
var years = new Array(0);
var s = 0;
var tempYear = 0;



function viewYears() {
    document.getElementById("expandedMonths").style.display = "none";
    document.getElementById("expandedYears").style.display = "flex";

    
    // RESET CELLS

    document.querySelectorAll(".temp-year-el").forEach(el => el.remove());

    // Variable Declarations

    var currentYear = currentDate.getFullYear();
    var beforeYear = currentYear - 4;
    var afterYear = currentYear + 1;
    var counter = 0;
   
    
    
    // Initialize current year in array
    years[4] = currentYear;

    // Generate Years Before in array
    for (let i = 0; i < 4; i++) {
        years[i] = beforeYear;
        beforeYear += 1;
    }

    // Generate Years After in array
    for (let i = 5; i < 12; i++) {
        years[i] = afterYear;
        afterYear += 1;
    }
    

    var yearsLength = years.length;
    document.querySelectorAll(".temp-year-el").forEach(el => el.remove());
    var yearsHTML = "<div class='temp-year-el row'>";
    // Generate Cells
    for (let i = 0; i < 12; i++) {
        yearsHTML += "<div class='temp-year-el col years-col m-1'><a href='#' class='temp-year-el years-link' onclick='showSelectedYear(" + i + ");'>" + years[i] + "</a></div>";

        counter += 1;
         

        if (counter % 4 == 0 ) {
            
            if (counter % 12 == 0){
            yearsHTML += "</div>";
            } else {
                yearsHTML += "</div><div class='row'>";
            }  
        }
    }
    tempYear = years[0];
    document.getElementById("yearContainer").insertAdjacentHTML( 'beforeend', yearsHTML );
    
}




// SET SELECTED YEAR 

function showSelectedYear(selectedYearNum) {
var selectedYear = years[selectedYearNum];
thisDate.setFullYear(selectedYear);
tempDate.setFullYear (selectedYear);
console.log(selectedYear);

setTimeout( function() {
    thisYear = thisDate.getFullYear();
}, 5);

setTimeout( function() {
    yearTitleHTML = thisYear;
}, 5);


// PRINT YEAR TITLE
document.getElementById("yearTitle").innerHTML = yearTitleHTML;
document.getElementById("expandedYears").style.display = "none";
document.getElementById("expandedMonths").style.display = "flex";

}

// FORWARD YEAR

function forwardYear() {
    // RESET CELLS

    // Variable Declarations

    document.querySelectorAll(".temp-year-el").forEach(el => el.remove());
    var counter = 0;
    var yearsHTML = "<div class='temp-year-el row'>";
    var tempDate = tempYear + 12;
    for (let i = 0; i < 12; i++) {
        years[i] = tempDate;
        yearsHTML += "<div class='temp-year-el col years-col m-1'><a href='#' class='temp-year-el years-link' onclick='showSelectedYear(" + i + ");'>" + years[i] + "</a></div>";
        
        tempDate += 1;
        counter += 1;
         

        if (counter % 4 == 0 ) {
            
            if (counter % 12 == 0){
            yearsHTML += "</div>";
            } else {
                yearsHTML += "</div><div class='row'>";
            }  
        }

    }


    console.log(years);
    document.getElementById("yearContainer").insertAdjacentHTML( 'beforeend', yearsHTML );
    tempYear = years[0];
}

// BACK YEAR

function backYear() {
    // RESET CELLS

    // Variable Declarations

    document.querySelectorAll(".temp-year-el").forEach(el => el.remove());
    var counter = 0;
    var yearsHTML = "<div class='temp-year-el row'>";
    var tempDate = tempYear - 12;
    for (let i = 0; i < 12; i++) {
        years[i] = tempDate;
        yearsHTML += "<div class='temp-year-el col years-col m-1'><a href='#' class='temp-year-el years-link' onclick='showSelectedYear(" + i + ");'>" + years[i] + "</a></div>";
        
        tempDate += 1;
        counter += 1;
         

        if (counter % 4 == 0 ) {
            
            if (counter % 12 == 0){
            yearsHTML += "</div>";
            } else {
                yearsHTML += "</div><div class='row'>";
            }  
        }

    }


    console.log(years);
    document.getElementById("yearContainer").insertAdjacentHTML( 'beforeend', yearsHTML );
    tempYear = years[0];
}