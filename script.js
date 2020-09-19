// console.log("js")

// var for storage

var storage = window.localStorage
var saveText = []
var times = [
    "9", "10", "11", "12", "1", "2", "3", "4", "5",]

// for loop that will generate my rows and columns dynamically and create the conditions for the calendar blocks to change color

for (let i = 0; i < times.length; i++) {
var currentDay = $("#currentDay")     
var div = $("<div class='row time-block'>");
var timeDiv = $("<div class='col-md-2 hour'>");
var textArea = $("<textarea id = task class = 'col-md-8 task'>");
var savBtn = $("<button data-id = saveT class = 'col-md-2 saveBtn'>")
var myContainer = $(".container")


// var savedText = JSON.parse(storage.getItem(hour)) || ''

  // get times from moment

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Current time
var currentTime = moment().format('H');

// Adding elements to page
// savBtn.attr("data-saveT", i)
textArea.attr("data-", i+9)
timeDiv.text(times[i])
savBtn.text("Save")
myContainer.append(div);
div.append(timeDiv);
div.append(textArea);
div.append(savBtn);

//adding addtional classes/ids


//changing colors
if (times[i] < currentTime) {
    textArea.attr("class", "col-md-8 past")    
}
else if (times[i] > currentTime) {
    textArea.attr("class", "col-md-8 future")
}
else if (times[i] === currentTime) {
    textArea.attr("class", "col-md-8 present")
}
}   
     
// Click listener and push value to local storage

//clear storage test

// localStorage.clear();
    
$(".saveBtn").on('click', function(event){
// console.log(event);
event.preventDefault()
var value = $(this).siblings("#task").val()
var time = $(this).siblings(".hour").text()
localStorage.setItem(time , value)
    console.log(value)
    console.log(time)


// returning 
var firstHour = localStorage.getItem("9")
var firstHour = localStorage.getItem("10")
var firstHour = localStorage.getItem("11")
var firstHour = localStorage.getItem("12")
var firstHour = localStorage.getItem("1")

// console.log(firstHour);




})


