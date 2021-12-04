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
    $("h1").text("");
  }
}

function wrongFun()
{
  playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(()=>{
      $("body").removeClass("game-over");  
      
      level=1;
      var temp = level;
      alert("Your score: "+(level-1)+"\nStart Again...!");
      
      $("h1").text("Level "+temp);
    },100);

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
