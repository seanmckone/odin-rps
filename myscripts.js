function computerPlay() {
    // Generate a random number 0,1,2
    choice = Math.floor(Math.random() * 3);
    // Assign output based on random number
    switch(choice){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(playerInput, cpuInput){
    playerInput = playerInput.toLowerCase();
    cpuInput = cpuInput.toLowerCase(); 

    document.getElementsByClassName("playerselectionimg")[0].src = `./images/${playerInput}.png`
    document.getElementsByClassName("computerselectionimg")[0].src = `./images/${cpuInput}.png`

    if(playerInput === cpuInput){
        return `Tie! You both chose ${playerInput}!`;
    }
    else if (playerInput === "rock" && cpuInput === "scissors"){
        return "You win! Rock beats scissors!";
    }
    else if (playerInput === "rock" && cpuInput === "paper"){
        return "You lose! Paper beats rock!";
    }
    else if (playerInput === "scissors" && cpuInput === "paper"){
        return "You win! Scissors beats paper!";
    }
    else if (playerInput === "scissors" && cpuInput === "rock"){
        return "You lose! Rock beats scissors!";
    }
    else if (playerInput === "paper" && cpuInput === "rock"){
        return "You win! Paper beats rock!";
    }
    else if (playerInput === "paper" && cpuInput === "scissors"){
        return "You lose! Scissors beats paper!";
    }
}


// Player and computer scores
let playerScore = 0;
let computerScore = 0;

// Selectors for information section
let playerselection = document.querySelector('.playerselectionimg');
let computerselection = document.querySelector('.computerselectionimg');
let score = document.querySelector('.scorecount');
let results = document.querySelector('.results');

// Selectors for buttons
let rockbutton = document.querySelector('.rockbutton'); 
let paperbutton = document.querySelector('.paperbutton');
let scissorsbutton = document.querySelector('.scissorsbutton');


rockbutton.addEventListener('mousedown', () => {
    rockbutton.classList.toggle("pressed");
    playerInput = "rock"
    const computerInput = computerPlay();
    result = playRound(playerInput, computerInput);

    if(result.includes("win")) {
        playerScore++;
    }
    else if (result.includes("lose")) {
        computerScore++;
    }
    results.textContent = result;
    score.textContent = `${playerScore}:${computerScore}`;

    if ( playerScore == 5) {
        results.textContent = "You Win! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }

    if ( computerScore == 5) {
        results.textContent = "You Lose! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }
    
});
rockbutton.addEventListener('mouseup', () => {
    rockbutton.classList.toggle("pressed");
});


paperbutton.addEventListener('mousedown', () => {
    paperbutton.classList.toggle("pressed");
    playerInput = "paper"
    const computerInput = computerPlay();
    result = playRound(playerInput, computerInput);

    if(result.includes("win")) {
        playerScore++;
    }
    else if (result.includes("lose")) {
        computerScore++;
    }
    results.textContent = result;
    score.textContent = `${playerScore}:${computerScore}`;

    if ( playerScore == 5) {
        results.textContent = "You Win! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }

    if ( computerScore == 5) {
        results.textContent = "You Lose! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }
});
paperbutton.addEventListener('mouseup', () => {
    paperbutton.classList.toggle("pressed");
});

scissorsbutton.addEventListener('mousedown', () => {
    scissorsbutton.classList.toggle("pressed");
    playerInput = "scissors"
    const computerInput = computerPlay();
    result = playRound(playerInput, computerInput);

    if(result.includes("win")) {
        playerScore++;
    }
    else if (result.includes("lose")) {
        computerScore++;
    }
    results.textContent = result;
    score.textContent = `${playerScore}:${computerScore}`;

    if ( playerScore == 5) {
        results.textContent = "You Win! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }

    if ( computerScore == 5) {
        results.textContent = "You Lose! Click a button to play again.";
        playerScore = 0;
        computerScore = 0;
    }

});
scissorsbutton.addEventListener('mouseup', () => {
    scissorsbutton.classList.toggle("pressed");
});
