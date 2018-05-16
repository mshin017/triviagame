//PSEUDO CODE
// Variables showImage will hold the setInterval when we start the slideshow
// var showImage;
//count will keep track of the index of the current display
// var count = 0;
var chosenQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
var question = chosenQuestion.questions;
var choices = chosenQuestion.choices;
var correct = chosenQuestion.correct;
    console.log(chosenQuestion);
    console.log(question);
    console.log(choices);
    console.log(correct);

//-----------------------------

window.onload=function(){
    $(".buttons").hide();
    $("#time").hide();
}

$("#start").click(start)

function start() {
    $("#start").hide(); $(".buttons").show(); $("#time").show();
    displayQuestion();
    displayChoices();
}

function displayQuestion(){
    $("#questions").html("<p> Q: " + question + "</p>")
    timer();
}
function displayChoices(){
    $("#opt-1").append(choices[0]);
    $("#opt-2").append(choices[1]);
    $("#opt-3").append(choices[2]);
    $("#opt-4").append(choices[3]);

}


// function nextQuestionInRound () {
//     chosenQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
//     question = chosenQuestion.questions;
//     choices = chosenQuestion.choices;
//     correct = chosenQuestion.correct;
// }
// nextQuestionInRound ();

// function displayQuestion () {
//     timer();
//     $("#questions").html("<p> Q: " + questions[0] + "</p>");
//     $("#opt-1").append(choice1[0]);
//     $("#opt-2").append(choice2[0]);
//     $("#opt-3").append(choice3[0]);
//     $("#opt-4").append(choice4[0]);

// }


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
