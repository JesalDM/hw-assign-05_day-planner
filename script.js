// Dynamically create HTML elements
    // use for-loop to create multiple rows representing each time-block

// Add CSS classes to the elements
    // Identify and add the appropriate classes from .css to elements to apply the appropriate styling

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