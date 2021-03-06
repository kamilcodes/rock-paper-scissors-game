// DOM elements:
const btnPlay = document.getElementById("btn-play");
const btnNewGame = document.getElementById("btn-new-game");
const handImage = document.querySelectorAll(".hand-img");
const playerCard1 = document.getElementById("player-card--1");
const playerCard2 = document.getElementById("player-card--2");
const player1HandBox = document.getElementById("player1-hand-box");
const player2HandBox = document.getElementById("player2-hand-box");
const playerCardText1 = document.getElementById("player-card-text--1");
const playerCardText2 = document.getElementById("player-card-text--2");
const player1Hand = document.getElementById("player1-hand");
const player2Hand = document.getElementById("player2-hand");
const player1Point1 = document.getElementById("player-1-point--1");
const player2Point1 = document.getElementById("player-2-point--1");
const player1Point2 = document.getElementById("player-1-point--2");
const player2Point2 = document.getElementById("player-2-point--2");
const player1Point3 = document.getElementById("player-1-point--3");
const player2Point3 = document.getElementById("player-2-point--3");

// Initial States:
let hands = ["rock", "paper", "scissors"];
let currentHandPlayer1 = "";
let currentHandPlayer2 = "";
let player1WinsRound = false;
let player2WinsRound = false;
playing = true;
let player1Wins1stRound = false;
let player2Wins1stRound = false;
let player1Wins2ndRound = false;
let player2Wins2ndRound = false;
let player1Wins3rdRound = false;
let player2Wins3rdRound = false;

// Game Functionality:

function getRandomHands() {
  getRandomHandPlayer1();
  getRandomHandPlayer2();
}

function getRandomHandPlayer1() {
  let randomNumber = Math.floor(Math.random() * hands.length);
  let hand = hands[randomNumber];
  currentHandPlayer1 = hand;
  console.log("Player1:" + currentHandPlayer1);
  if (currentHandPlayer1 === "rock") {
    // player1HandBox.innerHTML = "ROCK";
    player1Hand.src = "assets/hand-rock-small.svg";
  } else if (currentHandPlayer1 === "paper") {
    // player1HandBox.innerHTML = "PAPER";
    player1Hand.src = "assets/hand-paper-small.svg";
  } else if (currentHandPlayer1 === "scissors") {
    // player1HandBox.innerHTML = "SCISSORS";
    player1Hand.src = "assets/hand-scissors-small.svg";
  }
}

function getRandomHandPlayer2() {
  let randomNumber = Math.floor(Math.random() * hands.length);
  let hand = hands[randomNumber];
  currentHandPlayer2 = hand;
  console.log("Player2:" + currentHandPlayer2);
  if (currentHandPlayer2 === "rock") {
    // player2HandBox.innerHTML = "ROCK";
    player2Hand.src = "assets/hand-rock-small.svg";
  } else if (currentHandPlayer2 === "paper") {
    // player2HandBox.innerHTML = "PAPER";
    player2Hand.src = "assets/hand-paper-small.svg";
  } else if (currentHandPlayer2 === "scissors") {
    // player2HandBox.innerHTML = "SCISSORS";
    player2Hand.src = "assets/hand-scissors-small.svg";
  }
}

// Check wich player wins the current round:
function winsRound() {
  if (currentHandPlayer1 === "rock" && currentHandPlayer2 === "scissors") {
    player1WinsRound = true;
    player2WinsRound = false;
  } else if (currentHandPlayer1 === "rock" && currentHandPlayer2 === "rock") {
    player1WinsRound = false;
    player2WinsRound = false;
  } else if (currentHandPlayer1 === "rock" && currentHandPlayer2 === "paper") {
    player1WinsRound = false;
    player2WinsRound = true;
  } else if (currentHandPlayer1 === "paper" && currentHandPlayer2 === "rock") {
    player1WinsRound = true;
    player2WinsRound = false;
  } else if (currentHandPlayer1 === "paper" && currentHandPlayer2 === "paper") {
    player1WinsRound = false;
    player2WinsRound = false;
  } else if (
    currentHandPlayer1 === "paper" &&
    currentHandPlayer2 === "scissors"
  ) {
    player1WinsRound = false;
    player2WinsRound = true;
  } else if (
    currentHandPlayer1 === "scissors" &&
    currentHandPlayer2 === "paper"
  ) {
    player1WinsRound = true;
    player2WinsRound = false;
  } else if (
    currentHandPlayer1 === "scissors" &&
    currentHandPlayer2 === "scissors"
  ) {
    player1WinsRound = false;
    player2WinsRound = false;
  } else if (
    currentHandPlayer1 === "scissors" &&
    currentHandPlayer2 === "rock"
  ) {
    player1WinsRound = false;
    player2WinsRound = true;
  }
}

// add a point for the winner of the current round:
function addPoint() {
  if (
    player1WinsRound === true &&
    !player1Point1.classList.contains("player-card__point--wins")
  ) {
    player1Point1.classList.add("player-card__point--wins");
    player1Wins1stRound = true;
  } else if (
    player2WinsRound === true &&
    !player2Point1.classList.contains("player-card__point--wins")
  ) {
    player2Point1.classList.add("player-card__point--wins");
    player2Wins1stRound = true;
  }
  //2nd point:
  else if (
    player1WinsRound === true &&
    player1Wins1stRound === true &&
    !player1Point2.classList.contains("player-card__point--wins")
  ) {
    player1Point2.classList.add("player-card__point--wins");
    player1Wins2ndRound = true;
  } else if (
    player2WinsRound === true &&
    player2Wins1stRound &&
    !player2Point2.classList.contains("player-card__point--wins")
  ) {
    player2Point2.classList.add("player-card__point--wins");
    player2Wins2ndRound = true;
  }
  // 3rd Point
  else if (
    player1WinsRound === true &&
    player1Wins2ndRound === true &&
    !player1Point3.classList.contains("player-card__point--wins")
  ) {
    player1Point3.classList.add("player-card__point--wins");
    player1Wins3rdRound = true;
  } else if (
    player2WinsRound === true &&
    player2Wins2ndRound === true &&
    !player2Point3.classList.contains("player-card__point--wins")
  ) {
    player2Point3.classList.add("player-card__point--wins");
    player2Wins3rdRound = true;
  }
}

// remove points:
function removePoints() {
  player1Point1.classList.remove("player-card__point--wins");
  player1Point2.classList.remove("player-card__point--wins");
  player1Point3.classList.remove("player-card__point--wins");
  player2Point1.classList.remove("player-card__point--wins");
  player2Point2.classList.remove("player-card__point--wins");
  player2Point3.classList.remove("player-card__point--wins");
}

// Check if a player has 3 wins:
function winsGame() {
  if (
    player1Wins1stRound === true &&
    player1Wins2ndRound === true &&
    player1Wins3rdRound === true
  ) {
    // display modal: PLayer 1 Wins
    // stop get randnom number
    playing = false;
    btnPlay.classList.add("btn-play--inactive");
    playerCard1.classList.add("player-card--winner");
  } else if (
    player2Wins1stRound === true &&
    player2Wins2ndRound === true &&
    player2Wins3rdRound === true
  ) {
    // display modal: PLayer 2 Wins
    // stop get randnom number
    playing = false;
    btnPlay.classList.add("btn-play--inactive");
    playerCard2.classList.add("player-card--winner");
  }
}

// reset the winner variable before next round:
function setWinsToFalse() {
  player1WinsRound = false;
  player2WinsRound = false;
}

// Show hands icon when btn play is clicked:
function showHands() {
  player1Hand.classList.remove("hidden");
  player2Hand.classList.remove("hidden");
}

function hideHands() {
  player1Hand.classList.add("hidden");
  player2Hand.classList.add("hidden");
}

function hideText() {
  playerCardText1.classList.add("hidden");
  playerCardText2.classList.add("hidden");
}

function showText() {
  playerCardText1.classList.remove("hidden");
  playerCardText2.classList.remove("hidden");
}

// Start Game & get new random hand
btnPlay.addEventListener("click", function play() {
  if (playing === true) {
    hideText();
    showHands();
    setWinsToFalse();
    getRandomHands();
    winsRound();
    addPoint();
    winsGame();
  }
});

// restart game:
btnNewGame.addEventListener("click", function () {
  showText();
  hideHands();
  removePoints();
  btnPlay.classList.remove("btn-play--inactive");
  playerCard1.classList.remove("player-card--winner");
  playerCard2.classList.remove("player-card--winner");
  currentHandPlayer1 = "";
  currentHandPlayer2 = "";
  player1WinsRound = false;
  player2WinsRound = false;
  playing = true;
  player1Wins1stRound = false;
  player2Wins1stRound = false;
  player1Wins2ndRound = false;
  player2Wins2ndRound = false;
  player1Wins3rdRound = false;
  player2Wins3rdRound = false;
});
