
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");
let choices = new Array("rock","paper","scissors");
let cpu = 0;
let player = 0;
function getComputerChoice(){
    let cpuChoice;
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}


function playRound(choice){
    
    let computerChoice = getComputerChoice();
    let playerChoice = choice;
    let outcome;
    
    switch(playerChoice){

        case "rock":
            if(computerChoice == "scissors"){
                outcome = "You Win!..Rock beats Scissors";
                player++;
                userScore.innerHTML = player; 
            }
            else if(computerChoice == "paper"){
                outcome = "You Lose..Paper beats Rock";
                cpu++;
                computerScore.innerHTML = cpu;
            }
            else{
                outcome = "Tie";
            }
            break;
        case "paper":
            if(computerChoice == "scissors"){
                outcome = "You Lose...Scissors beats Paper";
                cpu++;
                computerScore.innerHTML = cpu;
            }
            else if(computerChoice == "rock"){
                outcome = "You Win!..Paper beats Rock";
                player++;
                userScore.innerHTML = player; 
            }
            else{
                outcome = "Tie";
            }
            break;
        case "scissors":
            if(computerChoice == "paper"){
                outcome = "You Win!..Scissors beats Paper";
                player++;
                userScore.innerHTML = player; 
            }
            else if(computerChoice == "rock"){
                outcome = "You Lose..Rock beats Scissors"; 
                cpu++;
                computerScore.innerHTML = cpu;  
            }
            else{
                outcome = "Tie";
            }
            break;
    }
    result.innerHTML = outcome;
   

    if(cpu == 5){
        const final = document.createElement("p");
        final.textContent = "CPU Wins the Game";
        result.appendChild(final);
        userScore.innerHTML = 0; 
        computerScore.innerHTML = 0;
        player = 0;
        cpu = 0;
    }
    if(player == 5){
        const final = document.createElement("p");
        final.textContent = "You Win the Game!"
        result.appendChild(final);
        userScore.innerHTML = 0; 
        computerScore.innerHTML = 0;
        player = 0;
        cpu = 0;
    }
    console.log(outcome);
    //return outcome;   
}

function game(){
    let round = 0;
    let player = 0;
    let cpu = 0;
    let outcome;
    while(round < 5){
        outcome = playRound(getPlayerSelection(), getComputerChoice())
        console.log(outcome);
        if(outcome.includes("Win")){
            player++;
        }
        else if(outcome.includes("Lose")){
            cpu++;
        }
        round++;
    }
}

//DOM Section 
const buttons = document.querySelectorAll('button');

//event listener
buttons.forEach(button => button.addEventListener('click', e => {
    playRound(button.className);
})
);
//console.log(game());
