let choices = new Array("rock","paper","scissors");
function getComputerChoice(){
    let cpuChoice;
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

function getPlayerSelection(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let choice = playerSelection.toLowerCase();
    //console.log(typeof choice);
    //console.log(choice);
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        playerSelection = prompt("Rock, Paper, or Scissors?");
        choice = playerSelection.toLowerCase();
    }

    return choice;
}

function playRound(playerChoice,computerChoice){
    let result;
    switch(playerChoice){

        case "rock":
            if(computerChoice == "scissors"){
                result = "You Win!..Rock beats Scissors";
            }
            else if(computerChoice == "paper"){
                result = "You Lose..Paper beats Rock";
            }
            else{
                result = "Tie";
            }
            break;
        case "paper":
            if(computerChoice == "scissors"){
                result = "You Lose...Scissors beats Paper";
            }
            else if(computerChoice == "rock"){
                result = "You Win!..Paper beats Rock";
            }
            else{
                result = "Tie";
            }
            break;
        case "scissors":
            if(computerChoice == "paper"){
                result = "You Win!..Scissors beats Paper";
            }
            else if(computerChoice == "rock"){
                result = "You Lose..Rock beats Scissors";   
            }
            else{
                result = "Tie";
            }
            break;
    }
    return result;    
}

function game(){
    let round = 0;
    let player = 0;
    let cpu = 0;
    let result;
    while(round < 5){
        result = playRound(getPlayerSelection(), getComputerChoice())
        console.log(result);
        if(result.includes("Win")){
            player++;
        }
        else if(result.includes("Lose")){
            cpu++;
        }
        round++;
    }
    if(player > cpu){
        return `You win  ${player} - ${cpu}`;
    }
    else if (cpu > player){
        return `You win ${cpu} - ${player}`;
    }
    else{
        return `Tie game!`
    }
}


console.log(game());
