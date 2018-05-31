var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qACount = 1;
var timer = '';


var start = function(){
	$('.startBtn').on('click',function(){
		$('.trivSection').empty();
		createQuestions();
	});
};

var createQuestions = function(){
    timerStart();
    
	var question = qA[qACount]['question'];
	var newDiv = $('<div>');
	newDiv.addClass('question');
	newDiv.text(question);
    $('.trivSection').append(newDiv);
    
	createAnswers();
};

var createAnswers = function(){
	var answerLength = qA[qACount]['answers'].length;
	for(var i = 0; i < answerLength;i++){
		var answers = qA[qACount]['answers'][i];
		var ansBtn = $('<button>');
		ansBtn.addClass('answerBtn option');
		ansBtn.attr('data-type',answers);
		ansBtn.text(answers);
		$('.trivSection').append(ansBtn);

	}
	

};

var checkAnswer = function(){

	var userAnswer = $(this).data('type');
	var correctAnswer = qA[qACount]['correct'];
	var correctImg = qA[qACount]['imageUrl'];

	var right = qA[qACount]['right'];
    var wrong = qA[qACount]['wrong'];
    
	console.log(qACount);
	$(".answerBtn").on("click", function (){
        if(userAnswer === correctAnswer){
            rightCount++;
            $('.trivSection').empty();
            
            var newImg = $('<img>');
            newImg.attr('src',correctImg);
            $('.trivSection').append(newImg);

            var newDiv = $('<div>');
            newDiv.addClass('rightAnswer');
            newDiv.text(right);
            $('.trivSection').append(newDiv);

            clearInterval(timer)
            
            qACount++;
            
            if(qACount <= 3){
                setTimeout(
                    function(){
                        $('.trivSection').empty();
                        createQuestions();
                        },3500);
            }
            else{
                $('.trivSection').empty();
                var newImg = $('<img>');
                newImg.attr('src',correctImg);
                $('.trivSection').append(newImg);

                var newDiv = $('<div>');
                newDiv.addClass('rightAnswer');
                newDiv.text(right);
                $('.trivSection').append(newDiv);
                
                clearInterval(timer)
                setTimeout(gameOver, 3500);
            }
        }
        else{
            wrongCount++;

            $('.trivSection').empty();
            var newImg = $('<img>');
            newImg.attr('src',correctImg);
            $('.trivSection').append(newImg);
            
            var newDiv = $('<div>');
            newDiv.addClass('wrongAnswer');
            newDiv.text(wrong);
            $('.trivSection').append(newDiv);
            
            clearInterval(timer)

			qACount++;
		
			if(qACount <= 9){
			setTimeout(function(){
			$('.trivSection').empty();
			createQuestions();
			},3500);
			}
			else{
			$('.trivSection').empty();
			var newImg = $('<img>');
            newImg.attr('src',correctImg);
            $('.trivSection').append(newImg);
        
			var newDiv = $('<div>');
			newDiv.addClass('wrongAnswer');
			newDiv.text(wrong);
			$('.trivSection').append(newDiv);

			clearInterval(timer);
			setTimeout(gameOver, 3500);
			}
		}
	});
};

var timerStart = function(){ 
	$('.timerSection').empty();
	trivTime = 100;
	var timeTag = $('<div>');
	timeTag.addClass('time');
    timeTag.addClass('progress');
    
	var progressBar = $('<div>');
	progressBar.addClass('progress-bar');
	progressBar.width(trivTime + '%');

	$('.timerSection').append(timeTag);
    $('.time').append(progressBar);	
    
    timer = setInterval(timeDecrement,100);
    console.log(trivTime);

};

var timeDecrement = function(){ 
	$('.progress-bar').width(trivTime + '%');
	trivTime--;
	if(trivTime === -10){
		userAnswer = false;
		clearInterval(timer);
		checkAnswer();
	}
};

var gameOver = function(){
	$('.trivSection').empty();	$('.timerSection').empty();

	var scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount);
	$('.trivSection').append(scoreDiv);

	var gameOver = $('<div>');
	gameOver.addClass('gameOver');
	gameOver.text('Game Over! Play Again ?');
	$('.trivSection').append(gameOver);

	var newBtn = $('<button>');
	newBtn.addClass('answerBtn resetBtn');
	newBtn.text('Reset');
	$('.trivSection').append(newBtn);

	trivTime = 100;
	qACount = 1;
	rightCount = 0;
	wrongCount = 0;

	$('.resetBtn').on('click',function(){
		$('.trivSection').empty()

		createQuestions();
	});
}


start();

