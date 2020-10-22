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

// this function gets the saved event schedule from local storage and color-codes the rows
function getSchedule(){
    // gets all the saved events from local storage if available
    const allEvents = JSON.parse(localStorage.getItem("eventsData")) || {};
    // this function compares each time-block to current time and adds corresponsing CSS classes for color-coding rows based on past, present or future times
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
    // displays the saved event text retrieved from the local storage in the respective rows/time-block events on UI
    $(this).children('textarea').text(allEvents["timeslot_" + rowId]);    
    })        
}  

getSchedule();

/*On user action*/       
// this function saves/stores the events the user entered(in textarea) in local storage when user clicks on the corresponding save button   
$('.saveBtn').click(function(){
        // get the existing object of events from local storage 
        let eventObj = JSON.parse(localStorage.getItem("eventsData")) || {};
        // add the current event that user entered and saved to the event object
        eventObj["timeslot_" + ($(this).parent('.row').attr("id"))] = ($(this).prev('textarea').val());
        // store the updated event object in local storage 
        localStorage.setItem("eventsData", JSON.stringify(eventObj));     
})