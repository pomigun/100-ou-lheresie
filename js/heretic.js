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
let muteButton = document.getElementById("mute-button");
let playerTurn = 1;
let diceNb = 0;
let sound = 1;

function startNullify() {
    rollButton.removeEventListener("click", diceRoll);
    holdButton.removeEventListener("click", holding);
    player1RoundScore.innerText = 0;
    player1GlobalScore.innerText = 0;
    player2RoundScore.innerText = 0;
    player2GlobalScore.innerText = 0;
    console.log("Remise à zéro global")
}
function diceRoll() {
    diceRollingSound();
    diceNb = Math.floor(Math.random() * (7 - 1) + 1)
    switch (diceNb) {
        case 1:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-1.svg)";
        updateRound();
        if(playerTurn === 1) {
            spaceMarinesGruntSound();
            console.log("Score round 1 à 0 et passage au joueur 2");
            player1RoundScore.innerText = 0;
            playerTurn = 2;
            player1Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
            player2Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,0.8)";
        } else {
            chaosMarinesGruntSound();
            console.log("Score round 2 à 0 et passage au joueur 1");
            player2RoundScore.innerText = 0;
            playerTurn = 1;
            player2Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
            player1Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,0.8)";
        }
        break;
        case 2:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-2.svg)"
        updateRound();
        break;
        case 3:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-3.svg)"
        updateRound();
        break;
        case 4:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-4.svg)"
        updateRound();
        break;
        case 5:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-5.svg)"
        updateRound();
        break;
        case 6:
        console.log(`le chiffre obtenu est ${diceNb}`);
        dice.style.backgroundImage = "url(./img/dice-6.svg)"
        updateRound();
        break;
    }
}
function updateRound() {
    if(playerTurn === 1) {
        player1RoundScore.innerText = Number(player1RoundScore.innerText) + diceNb;
    } else {
        player2RoundScore.innerText = Number(player2RoundScore.innerText) + diceNb;
    }
}
function holding() {
    if (playerTurn === 1) {
        console.log("Score round 1 sécurisé et passage au joueur 2");
        playerTurn = 2;
        player1Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player2Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,1)";
        player1GlobalScore.innerText = Number(player1GlobalScore.innerText) + Number(player1RoundScore.innerText);
        player1RoundScore.innerText = 0;
        checkVictory();

    } else {
        console.log("Score round 2 sécurisé et passage au joueur 1");
        playerTurn = 1;
        player2Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player1Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,1)";
        player2GlobalScore.innerText = Number(player2GlobalScore.innerText) + Number(player2RoundScore.innerText);
        player2RoundScore.innerText = 0;
        checkVictory();
    }

}
function spaceMarinesGruntSound() {
    if (sound === 1){
        let spaceMarinesGrunt = new Audio('./sound/grunt.wav');
        spaceMarinesGrunt.play();
    }
}
function spaceMarinesVictorySound() {
    if (sound === 1) {
        let spaceMarinesVictory = new Audio('./sound/emperor.wav');
        spaceMarinesVictory.play();
    }
}
function chaosMarinesGruntSound() {
    if (sound === 1) {
        let chaosMarinesGrunt = new Audio('./sound/Chaos-marines.wav');
        chaosMarinesGrunt.play();
    }
}
function chaosMarinesVictorySound() {
    if (sound === 1) {
        let chaosMarinesVictory = new Audio('./sound/chaosVictory.wav');
        chaosMarinesVictory.play();
    }
}
function diceRollingSound() {
    if (sound === 1) {
        let diceRolling = new Audio('./sound/dice.wav');
        diceRolling.play()
    }
}
function checkVictory() {
    if (Number(player1GlobalScore.innerText) >= 100) {
        rollButton.removeEventListener("click", diceRoll);
        holdButton.removeEventListener("click", holding);
        spaceMarinesVictorySound();
        player1Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player1Img.style.animation ="0.6s ease-out infinite alternate 0s Victory";
        player2Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
    } else if (Number(player2GlobalScore.innerText) >= 100) {
        rollButton.removeEventListener("click", diceRoll);
        holdButton.removeEventListener("click", holding);
        chaosMarinesVictorySound();
        player1Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player2Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player2Img.style.animation ="0.6s ease-out infinite alternate 0s Victory";
    }
}
function soundControl() {
    if (sound === 1) {
        sound = 0;
    } else {
        sound = 1;
    }
}

muteButton.addEventListener("click", soundControl)
newGameButton.addEventListener("click", () => {
    startNullify();
    if (playerTurn === 1) {
        player1Img.style.animation ="";
        player2Img.style.animation ="";
        player2Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player1Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,0.8)";
    } else {
        player1Img.style.animation ="";
        player2Img.style.animation ="";
        player1Img.style.boxShadow = "-1em 1em 1em rgba(0,0,0,0.3)";
        player2Img.style.boxShadow = "-1em 1em 1em rgba(255,0,0,0.8)";
    }
    rollButton.addEventListener("click", diceRoll)
    holdButton.addEventListener("click", holding)
})
