// console.log("js")
let storage = window.localStorage


var times = [
    "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", 
]


  // get times from moment

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// create hour var

var hour = moment().hours();
// console.log(hour);

//create save button function and push to local storage





// var container = document.querySelector('.container')
// // console.log(container);


// var div = document.createElement('div');
// div.innerText = "10am";
// container.appendChild(div)

// function row() {

//     var t = 9;
//     for (let i = 0; i < times.length; i++) {
// var divEl = $("<div>")
// $(".time-block").attr("id", `hour-${t}`);
// var singleTime = $("<div class='col-md-1 hour'>").text(times[i]);
// div.append(singleTime);


// var textEl = $("<textarea class="col-md-8 past">)
// var btnEl = $("<button class="col-md-2 saveBtn">)
// var textEl = $("<textarea>")
// textEl.


// var textEl = $("<textarea>")
// textEl.

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
    myContainer.append(div, textAreaEl, savBtn);

}

$('.savBtn').on('click', function(){
 //get the id off of this 
 //use id to get .val of input area
 //then save that value to localstorage, and then update the text


   // $(this)
})




// // }

// var $newdiv1 = $( "<div id='10am'></div>" )
// $('.container').append($newdiv1)

