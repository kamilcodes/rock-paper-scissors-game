let btnPlay = document.getElementById("btn-play");
let player1HandBox = document.getElementById("player1-hand-box");
let player2HandBox = document.getElementById("player2-hand-box");
let player1Hand = document.getElementById("player1-hand");
let player2Hand = document.getElementById("player2-hand");

let hands = ["rock", "paper", "scissors"];
let currentHandPlayer1;
let currentHandPlayer2;

function play() {
  getRandomHandPlayer1();
  getRandomHandPlayer2();
}

function getRandomHandPlayer1() {
  let randomNumber = Math.floor(Math.random() * hands.length);
  let hand = hands[randomNumber];
  currentHandPlayer1 = hand;
  //   console.log("Player1:" + currentHandPlayer1);
  if (currentHandPlayer1 === "rock") {
    player1Hand.src = "assets/hand-rock-regular.svg";
  } else if (currentHandPlayer1 === "paper") {
    player1Hand.src = "assets/hand-paper-regular.svg";
  } else if (currentHandPlayer1 === "scissors") {
    player1Hand.src = "assets/hand-scissors-regular.svg";
  }
}
function getRandomHandPlayer2() {
  let randomNumber = Math.floor(Math.random() * hands.length);
  let hand = hands[randomNumber];
  currentHandPlayer2 = hand;
  //   console.log("Player2:" + currentHandPlayer2);
  if (currentHandPlayer1 === "rock") {
    player2Hand.src = "assets/hand-rock-regular.svg";
  } else if (currentHandPlayer2 === "paper") {
    player2Hand.src = "assets/hand-paper-regular.svg";
  } else if (currentHandPlayer2 === "scissors") {
    player2Hand.src = "assets/hand-scissors-regular.svg";
  }
}
