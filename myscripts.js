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

function game() {
    playerScore = 0;
    opponentScore = 0;

    for (let i = 0; i < 5; i++) {
        playerInput = prompt("Choose rock, paper, or scissors");
        const computerInput = computerPlay();
        result = playRound(playerInput, computerInput);
        if(result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            opponentScore++;
        }
        console.log(result);
    }

    if (playerScore > opponentScore){
        console.log("You win!");
    }
    else if (playerScore < opponentScore){
        console.log("You lose!");
    }
    else {
        console.log("Tie!")
    }
}

game();