// console.log("js")

// var for storage

let storage = window.localStorage


var times = [
    "10", "11", "12", "1", "2", "3", "4", "5", "6", 
]


  // get times from moment

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


// hour var
var hour = moment().hours();

var currentTime = 14


// var t = 9; // uniqie id tag corresponded to the single time block div
for (let i = 10; i <= 18; i++) {
    var hour = `hour-${i}`
    var savedText = JSON.parse(storage.getItem(hour)) || ''
    var myContainer = $(".container")
    var div = $("<div class='row time-block'>"); // single time slot div
    div.attr("id", `hour-${i}`); // <div id = 'hour-10'class='row time-block'>

    var singleTime = $("<div class='col-md-1 hour'>").text(times[i-10]);
    // we are still missing textarea and button, we just need to create and append to the div
   var textAreaEl = $("<textarea class = 'col-md-8'>");
    // textAreaEl.attr("class", "textarea");
    // textAreaEl.attr("class", "col-md-8");
    textAreaEl.text(savedText)
    //textAreaEl.text('TEXT TEST--> ' + times[i-10]);
    var savBtn = $("<button class = 'col-md-2 saveBtn'>")
    // savBtn.attr("class", "saveBtn")
    // savBtn.attr("class", "col-md-2 saveBtn")
    savBtn.attr('id', i)
    savBtn.text("Save")

    // textAreaEl.append
    div.append(singleTime); 

    // append it to container
    div.append(textAreaEl, savBtn)
    myContainer.append(div);

    

   
}


    
$(".saveBtn").on('click', function(event){
//   $("textarea").siblings(value)
  console.log("test")
 //get the id off of this 

 //use id to get .val of input area
 //then save that value to localstorage, and then update the text


   
})


