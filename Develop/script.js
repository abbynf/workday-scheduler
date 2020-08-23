// this command updates the date at the top of the application
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

// This array holds all the hours that need to be displayed
var hoursAvailable = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var containerEl = $(".container")

newDiv = "<div></div";

// This loop creates a div for the row, three divs for the columns
for (i = 0; i < 9; i++) {
    var newRow = $(newDiv);
    newRow.addClass("row time-block");
    containerEl.append(newRow)

    // Create three columns, append all to newRow
    // Creates column to hold time of timeblock
    newColTime = $(newDiv);
    newColTime.addClass("col-1 hour")
              .text(hoursAvailable[i])
              .attr("data-value", i+9)
              .attr("id", "timeCol" + i)
    newRow.append(newColTime);

    // Creates column to hold textarea
    newColText = $(newDiv);
    newColText.addClass("col-10");
    newColText.addClass(evalhour());
    newColContent = $("<textarea></textarea>");
    newColText.append(newColContent);
    newRow.append(newColText);

    // Creates column to hold save button
    newColBtn = $(newDiv);
    newColBtn.addClass("col-1 saveBtn");
    icon = $("<i></i>");
    icon.addClass("fas fa-save");
    newColBtn.append(icon);
    newRow.append(newColBtn);        
}


// this function evaluates if the column's represented time is before, after, or current to the current time
function evalhour(){
    // this variable grabs the column's represented time as a string
    var timeOfRow = document.getElementsByClassName("hour")[i].dataset.value;

    // this variable turns the column's represented time into a number so it can be compared
    var timeOfRowNumber = parseInt(timeOfRow)

    // this variable finds the current hour as a string
    var timeNow = moment().format("HH");

    // this variable finds the current hour as a number
    var hourNumberNow = parseInt(timeNow); 

    // this conditional compares the column's represented hour to the current hour to determine if it is past, future, or present
    // and it returns the class 
    if (timeOfRowNumber == hourNumberNow){
        console.log(timeOfRow);
        return "present";
    }
    if (timeOfRowNumber < hourNumberNow){
        return "past";
    }
    if (timeOfRowNumber > hourNumberNow){
        return "future";
    }
}



console.log(window);
