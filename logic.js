
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  pink:
  {
    name: "Pink",
    value: 0
  },
  purple:
  {
    name: "Purple",
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;


var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var startGame = function() {


currentScore = 0;


targetScore = getRandom(19, 120);


crystal.blue.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);
crystal.pink.value = getRandom(1, 12);
crystal.purple.value = getRandom(1, 12);


$("#your-score").text(currentScore);
$("#target-score").text(targetScore);


 
};


var checkWin = function() {


  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");  
    lossCount++;
    $("#loss-count").text(lossCount);

    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");
    winCount++;
    $("#win-count").text(winCount);
    startGame();
  }

};


var addValues = function(clickedCrystal) {
  currentScore += clickedCrystal.value;
  $("#your-score").text(currentScore);
  checkWin();
};

startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#pink").click(function() {
  addValues(crystal.pink);
});

$("#purple").click(function() {
  addValues(crystal.purple);
});