let btnPlay = document.getElementById("btn-play");
let hands = ["rock", "paper", "scissors"];

function play() {
  getRandomHand();
}

function getRandomHand() {
  let randomNumber = Math.floor(Math.random() * hands.length);
  let hand = hands[randomNumber];
  //   console.log(hand);
}
