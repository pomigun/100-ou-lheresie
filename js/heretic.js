let newGameButton = document.getElementById("new-game-button");
let dice = document.getElementById("dice");
let rollButton = document.getElementById("roll-button");
let holdButton = document.getElementById("hold-button");
let player1RoundScore = document.getElementById("player-1-round-score");
let player1GlobalScore = document.getElementById("player-1-global-score");
let player1Img = document.getElementById("player-1-img");
let player2RoundScore = document.getElementById("player-2-round-score");
let player2GlobalScore = document.getElementById("player-2-global-score");
let player2Img = document.getElementById("player-2-img");
let playerTurn = "";
let diceNb = 0;

function startNullify() {
    player1RoundScore.innerText = 0;
    player1GlobalScore.innerText = 0;
    player2RoundScore.innerText = 0;
    player2GlobalScore.innerText = 0;
}
function diceRoll() {
    diceNb = Math.floor(Math.random() * (7 - 1) + 1)
    console.log(diceNb)
    switch (diceNb) {
        case 1:
        dice.style.backgroundImage = "url(./img/dice-1.svg)";
        updateRound(0);
        break;
        case 2:
        dice.style.backgroundImage = "url(./img/dice-2.svg)"
        updateRound(0);
        break;
        case 3:
        dice.style.backgroundImage = "url(./img/dice-3.svg)"
        updateRound(0);
        break;
        case 4:
        dice.style.backgroundImage = "url(./img/dice-4.svg)"
        updateRound(0);
        break;
        case 5:
        dice.style.backgroundImage = "url(./img/dice-5.svg)"
        updateRound(0);
        break;
        case 6:
        dice.style.backgroundImage = "url(./img/dice-6.svg)"
        updateRound(0);
        break;
    }
}
function updateRound() {
    player1RoundScore.innerText = diceNb;
}
function holding() {
    player1GlobalScore.innerText = Number(player1GlobalScore.innerText) + diceNb;

}

newGameButton.addEventListener("click", () => {
    startNullify();
    rollButton.addEventListener("click", () => {
        diceRoll();
    })
    holdButton.addEventListener("click", () => {
        holding();
    })
})
