var randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber1 = String(randomNumber1);
document.getElementById("img1").src="./images/dice" +randomNumber1+ ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = String(randomNumber2);
document.getElementById("img2").src="./images/dice" +randomNumber2+ ".png";

var winner = ""
if(randomNumber1 > randomNumber2) {
  winner = "Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  winner = "Player 2 wins";
}
else {
  winner = "Draw!"
}
document.querySelector("h1").innerText = winner;


console.log(randomNumber1);
