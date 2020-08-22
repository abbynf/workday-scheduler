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
    newRow.addClass("row");
    containerEl.append(newRow)

    // Create three columns, append all to newRow
    // Creates column to hold time of timeblock
    newColTime = $(newDiv);
    newColTime.addClass("column")
              .text(hoursAvailable[i]);
    newRow.append(newColTime);

    // Creates column to hold textarea
    newColText = $(newDiv);
    newColText.addClass("column");
    newColContent = $("<textarea></textarea>");
    newColText.append(newColContent);
    newRow.append(newColText);

    // Creates column to hold save button
    newColBtn = $(newDiv);
    newColBtn.addClass("column");
    newRow.append(newColBtn);

            
}

console.log(window);
