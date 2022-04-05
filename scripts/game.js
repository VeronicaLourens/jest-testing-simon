let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
    turnNumber: 0
}


// newGame()
function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];

    for(let circle of document.getElementsByClassName('circle')) {
        if(circle.getAttribute('data-listener') !== 'true') {
            circle.addEventListener('click', (e) => {
                let move = e.target.getAttribute('id');
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });

            circle.setAttribute('data-listener', 'true');
        }
    }

    showScore();
    addTurn();


}

// addTurn()
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();


}

// showTurns()
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {

        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;

        if(game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

// lightsOn()
function lightsOn(circ) {
    document.getElementById(circ).classList.add('light');
    setTimeout(function() {
        document.getElementById(circ).classList.remove('light');
    }, 400);
}

// playerTurn()

// showScore()
function showScore() {

    document.getElementById('score').innerText = game.score;
    
}


module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn, 
    showTurns
};

