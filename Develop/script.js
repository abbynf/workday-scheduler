    // this command updates the date at the top of the application
    var currentDate = moment().format('dddd, MMMM Do');
    console.log(currentDate);
    $("#currentDay").text(currentDate);

    // This loop creates a div for the row, three divs for the columns
    // for (i == 0; i<)