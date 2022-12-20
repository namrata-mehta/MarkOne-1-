var readlineSync= require("readline-sync");
var score=0;
console.log("...........LETS PLAY A SUPERHERO QUIZ...........")
var input= readlineSync.question("what's your name?");
console.log("welcome "+ input +" LETS SEE HOW MUCH DO YOU KNOW ABOUT SUPERHEROS.....");


function play(question,answer){
  var userAnswer= readlineSync.question(question);
  if (userAnswer=== answer) {
    console.log("right!");
    score=score+1;
   
  }else{
    console.log("wrong");
    
  }
   console.log("current score", score);
    console.log("-------")
}
var questions = [{
  question: "THE MAN OF STEEL IS ANOTHER NAME FOR WHICH SUPERHERO?",
  answer: "superman"
},
  {
  question: "WHAT IS THE REAL NAME OF BATMAN?",
  answer:"bruce wayne"
},
{
  question: "What year was the first Iron Movie movie released?",
  answer:"2008"
},
  {
  question: "Who would you call if Mr. Freeze attacked?",
  answer:"batman"
},
{
  question: "Who killed Thomas and Martha Wayne? ",
  answer:"joe chill"
}];

//looping
for (let i = 0; i < questions.length; i++) {
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
//console.log("wow you scored...."+score);

if (score>1) {
  console.log("amazing you scored  "+score)
} else {
  console.log("try again..........")
}