

var newArray = [];
var holder =[];
var numberCorrect = 0;
var numberWrong = 0;
var numberUnAnswered = 0;
var answerPick = "";
var timeRunning = false ;
var counter = 30;
var intervalId;
var index;
var pick;
// var questionCount = questionChoice.length;



var questionChoice = [
    {
        question: "What was Mario's original profession?",
        choices: ["Plumber","Electrician","Carpenter","Mechanic"],
        answer: 2,
        pic: "assets/images/Carpenter.png",

    },
    
    {
        question: "What does mario jump on after you complete a level?",
        choices: ["Bowser","A flag pole","A turtle","A coin"],
        answer: 1,
    },
    
    {
        question:"In which game did Mario first appear?",
        choices: ["Donky Kong","Super Mario Bors 2","Mario Party","Super Mario World"],
        answer: 0,

    },
    
    {
        question:"What was Mario origanlly called?",
        choices: ["Mario","Mr.Plumber","Luigi","Jump Man"],
        answer: 3,

    },
    

];

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
    $("#timeRemaining").html("<h3>Time Left" + counter + "</h3>");
    counter --;
    numberUnAnswered ++;
    if(counter === 0){
        stop()
        ("#answerBlock").html("<p> Time's up! The correct answer is: " + pick.choce[pick.answer] + "</p>")
        hidepicture();
    }

}

function stop(){
    timeRunning = false;
    clearInterval(intervalId);
}

function displayQuestion(){
    index = Math.floor(Math.random() * questionChoice.length);
    pick = questionChoice[index];

    for(var i = 0; i < pick.choices.lenght; i++){
        var playerChoice = $("<div>");
        playerChoice.addClass("answerchoice");
        playerChoice.html(pick.choice[i]);
        playerChoice.attr("data-guessvalue", i);
        $("#answerBlock").append(playerChoice);

    }
}

$('.answerchoice').on("clikc", function(){
    answerPick = parseInt($(this).attr("data-guessvalue"));
    if(answerPick === pick.answer){
        stop();
        numberCorrect++;
        answerPick="";
        $("#answerBlock").html("<p>Correct!</p>");
        hidepicture();
    }
    else{
        stop();
        numberWrong++;
        answerPick=""
        ("#answerBlock").html("<p> Wrong! The correct answer is: " + pick.choce[pick.answer] + "</p>")
        hidepicture();
    
    }
})



   
