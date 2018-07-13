$(document).ready();

var answer = [];
var correctAnswers =[];
var numCorrect = 0;
var numWrong = 0;
var numUnAnswered = 0;
var gameStart = false;
var answerPick = "";
var timer = ;
var counter = ;


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
        question:"What was Mario origanlly called?"
        choices: ["Mario","Mr.Plumber" "Luigi","Jump Man"],
        answer: 3;

    },
    

];


$("#start").on("click",function () {
    $("#start").hide();
    displayQuestion();
    runTimer();
    for(var i = o; i < questionChoice.length; i++)
    
})