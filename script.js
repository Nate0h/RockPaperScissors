let choices = new Array("rock","paper","scissors");
function getComputerChoice(){
    let cpuChoice;
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

function getPlayerSelection(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let choice = playerSelection.toLowerCase();
    console.log(typeof choice);
    //console.log(choice);
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        playerSelection = prompt("Rock, Paper, or Scissors?");
        choice = playerSelection.toLowerCase();
    }

    return choice;
}
console.log(getPlayerSelection());