document.write("<script src='questions.js' type='text/javascript'></script>");
//PSEUDO CODE
// Put links to image array 
var images = [];
// Variables showImage will hold the setInterval when we start the slideshow
// var showImage;
//count will keep track of the index of the current display
// var count = 0;
$.getScript("questions.js",function() {});

$("#start").click(start)

window.onload=function(){
    $(".buttons").hide();
    $("#time").hide();
}


function start() {
    $("#start").hide(); $(".buttons").show(); $("#time").show();
    displayQuestion();

}
function displayQuestion () {
    timer();
    $("#questions").html("<p> Q: " + questions[0] + "</p>");
    $("#opt-1").append(choice1[0]);
    $("#opt-2").append(choice2[0]);
    $("#opt-3").append(choice3[0]);
    $("#opt-4").append(choice4[0]);

}


function timer () {  
    var timeLeft=30;
    var timer = setInterval(function(){
        timeLeft--;
        $("#timer").text(timeLeft);
        if(timeLeft <= 0)
            clearInterval(timer)
    }, 1000);
}
clearInterval();




//function displayImage()
//function nextImage()
//function start()
//function restart()
