// Dynamically create HTML elements
    // use for-loop to create multiple rows representing each time-block
    // Identify and add the appropriate classes from .css to elements to apply the appropriate styling
    for (let i = 9; i< 18; i++){
        const row = $('<div>').addClass('row time-block');
        $('.container').append(row);
        const timeSlot = $('<div>').addClass('hour col-1').text(timeSlotText(i));;
        const evntText = $('<textarea>').addClass('description col-10');
        const saveButton = $('<button>').addClass('saveBtn col-1');
        row.append(timeSlot);
        row.append(evntText);
        row.append(saveButton);
        const icon =  $('<i>').addClass('fas fa-save');
        saveButton.append(icon);
    }

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
































// Add attributes/ids to elements if needed

/*On Page load*/    
    // Get current day to display it in header
        //use moment.js library 

    // Get current time 
        //use moment.js library

    // Get the entire day's schedule of events from local storage
        //use localStorage.getItem()

    // Display the day's schedule of events on UI. Rows color-coded based on past, present, future
        // Compare each row/time-block to current time and add corresponsing CSS classes for color-coding

/*On user action*/
    // Save the event/task when user clicks on save button after entering text into the textarea
        // use localStorage.setItem()