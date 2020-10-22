/*On Page load*/ 
// Displays Current day in header using moment.js library
$('#currentDay').text(moment().format("dddd, MMMM Do"));


// Dynamically creates HTML elements to create multiple rows representing each time-block using for-loop
// Appropriate classes from .css are added to elements to apply the appropriate styling
for (let i = 9; i< 18; i++){
    //adds an id to each row to identify each time-block
    const row = $('<div>').addClass('row time-block').attr("id", i);;
    $('.container').append(row);
    //used grid system to layout the elements and make them responsive
    // creates time-block divs and adds the text(hours)
    const timeSlot = $('<div>').addClass('hour col-1').text(timeSlotText(i));;
    //creates textarea for user to enter the day's work events
    const evntText = $('<textarea>').addClass('description col-10');
    // creates save button for every time-block for user to save the scheduled event
    const saveButton = $('<button>').addClass('saveBtn col-1');
    row.append(timeSlot);
    row.append(evntText);
    row.append(saveButton);
    // save button icon added from font-awesome 
    const icon =  $('<i>').addClass('fas fa-save');
    saveButton.append(icon);
}

// this function determines the text/hour to be displayed in each time-block div
function timeSlotText(hour){
    let hourText = "";
    if(hour<12){
        hourText = hour + " AM"
    } else if(hour>12){
        hourText = (hour-12) + " PM" 
    } else{
        hourText = hour + " PM"
    }
    return hourText;
}

// this function compares each time-block to current time and adds corresponsing CSS classes for color-coding rows based on past, present or future times
function determineRowColor(){
    $('.row').each(function(){
        //gets current time in hours using moment.js library
        let currentTime = moment().hour();
        //gets the id for each row which is the same as the military-hour time of that block
        let rowId = parseInt($(this).attr("id"));
        if (rowId < currentTime){
            $(this).addClass("past");
        } else if (rowId > currentTime){
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
}

determineRowColor();



// Get the entire day's schedule of events from local storage
        //use localStorage.getItem()

// Display the day's schedule of events on UI. 
        // Compare each row/time-block to current time and add corresponsing CSS classes for color-coding


/*On user action*/
    // Save the event/task when user clicks on save button after entering text into the textarea
        // use localStorage.setItem()