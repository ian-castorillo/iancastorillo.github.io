


var oP1files = [];
oP1files.push(new Audio("oP1/CSB0322.mp3"));

var IANfiles = [];

var damianSunFiles = [];



var currentTime = document.querySelector(".currentTime");
var totalTime = document.querySelector(".totalTime");

var playButton = document.querySelector(".playButton");
var pauseButton = document.querySelector(".pauseButton");


playButton.addEventListener("click", function() {
  
  playButton.style.display = "none";
  pauseButton.style.display = "initial";
} )

pauseButton.addEventListener("click", function() {
  
  pauseButton.style.display = "none";
  playButton.style.display ="";
} )