// console.log("js")

// var for storage

var storage = window.localStorage
var saveText = []
var times = [
    "9", "11", "12", "1", "2", "3", "4", "5",]

// for loop that will generate my rows and columns dynamically and create the conditions for the calendar blocks to change color

for (let i = 0; i < times.length; i++) {
var currentDay = $("#currentDay")     
var div = $("<div class='row time-block'>");
var timeDiv = $("<div class='col-md-2 hour'>");
var textArea = $("<textarea class = 'col-md-8'>");
var savBtn = $("<button class = 'col-md-2 saveBtn'>")
var myContainer = $(".container")
// timeFix = i + 9
// timeFix++

// var savedText = JSON.parse(storage.getItem(hour)) || ''

  // get times from moment

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Current time
var currentTime = moment().format('H');

// Adding elements to page
timeDiv.text(times[i])
savBtn.text("Save")
myContainer.append(div);
div.append(timeDiv);
div.append(textArea);
div.append(savBtn);

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
    
    


    
// $(".saveBtn").on('click', function(event){
// //   $("textarea").siblings(value)
//     event.preventDefault()  
//   var savePush = $(this).siblings(".textarea").val
// //   if ($(this)) {
// //       localStorage.setItem("saveText", savePush)
// //   }
// //  //get the id off of this 

// //  //use id to get .val of input area
// //  //then save that value to localstorage, and then update the text

// console.log($(this));
   
// })


