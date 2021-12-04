var colorRep = ["red","blue","green","yellow"];

var gamePattern = [];
var choosenPattern = [];
var level = 0;
var started = false;

$(".btn").on("click",function(){
  var chosenButton = $(this).attr("id");
  console.log(chosenButton);

  choosenPattern.push(chosenButton);

  playSound(chosenButton);

  animateButton(chosenButton);

  checkAnswer(choosenPattern.length-1);
});

$(document).keydown(function(){
  if(!started)
  {
    $("h1").text("Level "+level);
    randomButton();
    started = true;
  }
});

function checkAnswer(name)
{
  if(gamePattern[name] === choosenPattern[name])
  { 
    if(gamePattern.length === choosenPattern.length)
    {
      console.log("success!");
      randomButton();
    }
  }
  else
  {
    console.log("wrong!");
    wrongFun();
    randomButton();
  }
}

function wrongFun()
{
  playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(()=>{
      $("body").removeClass("game-over");  
      alert("Your score: "+(level-1)+"\nStart Again...!");
      level=1;
      $("h1").text("Level "+level);
    },200);

}

function randomButton(){

  level++;

  $("h1").text("Level "+level);

  gamePattern=[];
  choosenPattern=[];

  var randomNumber = Math.floor(Math.random()*4);
  console.log(randomNumber);

  var randoB = colorRep[randomNumber];
  console.log(randoB);

  gamePattern.push(randoB);

  $("#"+randoB).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randoB);

  animateButton(randoB);
}

function animateButton(name){
  $("#"+name).addClass("pressed");

  setTimeout(()=>{
    $("#"+name).removeClass("pressed");
  },200);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}




























// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//   checkAnswer(userClickedPattern.length-1);
// });


// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {

//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){

//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {

//       console.log("wrong");

     
//     }

// }

// function nextSequence() {

//   //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
//   userClickedPattern = [];


//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
