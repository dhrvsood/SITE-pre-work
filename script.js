// Global constants
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of clue sequence 
const patternLength = 8; // how long the pattern is
const totalStrikes = 3; // how many incorrect answers a player is allowed before losing 

// Global variables
var clueHoldTime = 1000;
var pattern = [];
var progress = 0;
var timer;
var timeLimit;
var timeTaken = 0;
var gamePlaying = false;
var audioPlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;
var striked = false;

function startGame() {
  timer = 0;
  strikes = 0;
  progress = 0;
  for (let i = 0; i < patternLength; i++) {
    pattern[i] = Math.floor(Math.random() * 5) + 1
  }
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timeLeft").innerHTML = "";
  // document.getElementById("timeLeft").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clearInterval(timeLimit);
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timeLeft").innerHTML = "";
  document.getElementById("startBtn").classList.remove("hidden");
  // document.getElementById("timeLeft").classList.add("hidden");
  clueHoldTime = 1000;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function startTimer() {
  timer -= 1;
  timeTaken += 1;
  if (timer < 0) {
    clearInterval(timeLimit);
    stopGame();
    alert("Game Over. You ran out of time.");
    return;
  }
  document.getElementById("timeLeft").innerHTML = "";  

  if (timer < 4*(progress + 1)) {
    // document.getElementById("timeLeft").classList.remove("hidden");
    document.getElementById("timeLeft").innerHTML = "Time remaining: " + timer + "s";  
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playAudio(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!");
  // 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36, approximate time taken to display each of the play cue messages
  alert("-----\nSTATS\n-----\nTime Taken: " + (timeTaken - 36) + "seconds\nStrikes Left: " + (totalStrikes - strikes));
}

function playClueSequence(){
  if (progress > 0 && !striked) {
    alert("Correct!");
  }
  clearInterval(timeLimit);
  guessCounter = 0;
  timer = 5*(progress + 1); // each increasing progress level gives 5 more seconds
  clueHoldTime -= 50; // each sequence moves quicker
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++) { // for each clue that is revealed so far
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
  timeLimit = setInterval(startTimer, 1000); // 1000ms = 1 second
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }
  
  // game logic here
  if (pattern[guessCounter] == btn) { // guess correct
    striked = false;
    if (progress == guessCounter) { // turn is over
      if (progress == pattern.length - 1) { // last turn
        winGame();
      }
      else { // increment progress
        progress++;
        playClueSequence();
      }
    }
    else { // increment guess counter
      guessCounter++;
    }
  }
  else {
    strikes++;
    striked = true;
    if (strikes == totalStrikes) {
      loseGame();
    }
    else {
      alert("Incorrect! Strikes remaining: " + (totalStrikes - strikes));
      playClueSequence();
    }
  }
}

// functions for starting and stopping audio
const audioMap = {
  1: 'sin',
  2: 'guitar',
  3: 'piano',
  4: 'flute',
  5: 'dog'
}

function playAudio(id, len) {
  startAudio(id);
  audioPlaying = true
  setTimeout(function() {
    stopAudio(id)
  }, len)
}

function startAudio(id) {
  document.getElementById(audioMap[id]).play();
}

function stopAudio(id) {
  document.getElementById(audioMap[id]).pause();
  document.getElementById(audioMap[id]).currentTime = 0;
}
