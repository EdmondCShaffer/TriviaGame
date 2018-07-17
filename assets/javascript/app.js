$(document).ready(function () {

var questionChoice = [
    {
        question: "What was Mario's original profession?",
        choice: ["Plumber","Electrician","Carpenter","Mechanic"],
        answer: 2,
        pic: "assets/images/Carpenter.png",

    },
    
    {
        question: "What does mario jump on after you complete a level?",
        choice: ["Bowser","A flag pole","A turtle","A coin"],
        answer: 1,
    },
    
    {
        question:"In which game did Mario first appear?",
        choice: ["Donky Kong","Super Mario Bors 2","Mario Party","Super Mario World"],
        answer: 0,

    },
    
    {
        question:"What was Mario origanlly called?",
        choice: ["Mario","Mr.Plumber","Luigi","Jump Man"],
        answer: 3,

    }];
var newArray = [];
var holder =[];
var numberCorrect = 0;
var numberWrong = 0;
var numberUnAnswered = 0;
var userGuess ="";
var timeRunning = false ;
var counter = 30;
var intervalId;
var index;
var pick;
var questionCount = questionChoice.length;

$("#reStart").hide();
$("#start").on("click",function () {
    $("#start").hide();
    displayQuestion();
    startTimer();
    for(var i = 0; i < questionChoice.length; i++){
        holder.push(questionChoice[i]);
}
    
    })

function startTimer(){
    if (!timeRunning) {
        intervalId = setInterval(decrement,1000)
        timeRunning = true;
        
    }
}

function decrement(){
    $("#timeRemaining").html("<h3>Time Left:" + counter + "</h3>");
    counter --;
    if(counter === 0){
        stop();
        numberUnAnswered++;
        $("#answerBlock").html("<p> Time's up! The correct answer is: " + pick.choice[pick.answer] + "</p>")
        hidepicture();
    }

}

function stop(){
    timeRunning = false;
    clearInterval(intervalId);
}

function displayQuestion(){
    index = Math.floor(Math.random()*questionChoice.length);
    pick = questionChoice[index];
    
		$("#questionBlock").html("<h2>" + pick.question + "</h2>");
        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            userChoice.attr("data-guessvalue", i);
            $("#answerBlock").append(userChoice);

    
   
}

$(".answerchoice").on("click", function () {
	//grab array position from userGuess
    userGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuess === pick.answer) {
		stop();
		numberCorrect++;
		userGuess="";
		$("#answerBlock").html("<p>Correct!</p>");
		hidepicture();
    } else{
        stop();
        numberWrong++;
        userGuess="";
        $("#answerBlock").html("<p> Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>")
        hidepicture();
    
    }
})
}


function hidepicture(){
    $("#answerBlock").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    questionChoice.splice(index,1);

    var hidePic = setTimeout(function() {
        $("#answerBlock").empty();
        counter = 30;
        
        if((numberWrong + numberCorrect + numberUnAnswered) === questionCount ) {
            $("#questionBlock").empty();
            $("#questionBlock").html("<h3>Game Over! Your Results:</h3>");
            $("#answerBlock").append("<h4> Correct:"  + numberCorrect + "</h4>");
            $("#answerBlock").append("<h4> Incorrect: " + numberWrong + "</h4>");
            $("#answerBlock").append("<h4> Unanswered: " + numberUnAnswered + "</h4>");
            $("#reStart").show();
            numberCorrect = 0;
            numberWrong = 0;
            numberUnAnswered = 0;

        } else{
            startTimer();
            displayQuestion();

        }

    }, 3000);
}
$("#reStart").on("click", function() {
    $("#reStart").hide();
    $("#answeBlock").empty()
    $("#questionBloc").empty();
    for(var i = 0; i < holder.length; i++){
        questionChoice.push(holder[i]);
    }
    startTimer();
    displayQuestion();

})
})

// fix restart btn
// picture place holders
// style css
// read me 
   
