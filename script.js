let choices = new Array("rock","paper","scissors");
let cpu = 0;
let player = 0;
function getComputerChoice(){
    let cpuChoice;
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

/*function getPlayerSelection(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let choice = playerSelection.toLowerCase();
    //console.log(typeof choice);
    //console.log(choice);
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        playerSelection = prompt("Rock, Paper, or Scissors?");
        choice = playerSelection.toLowerCase();
    }

    return choice;
}*/

function playRound(e){
    
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.className;
    let result;
    
    switch(playerChoice){

        case "rock":
            if(computerChoice == "scissors"){
                result = "You Win!..Rock beats Scissors";
                player++;
            }
            else if(computerChoice == "paper"){
                result = "You Lose..Paper beats Rock";
                cpu++;
            }
            else{
                result = "Tie";
            }
            break;
        case "paper":
            if(computerChoice == "scissors"){
                result = "You Lose...Scissors beats Paper";
                cpu++
            }
            else if(computerChoice == "rock"){
                result = "You Win!..Paper beats Rock";
                player++;
            }
            else{
                result = "Tie";
            }
            break;
        case "scissors":
            if(computerChoice == "paper"){
                result = "You Win!..Scissors beats Paper";
                player++;
            }
            else if(computerChoice == "rock"){
                result = "You Lose..Rock beats Scissors"; 
                cpu++;  
            }
            else{
                result = "Tie";
            }
            break;
    }
    const results = document.getElementById('results');
    const para = document.createElement("p");
    result += ` player: ${player} - cpu: ${cpu}`;  
    para.textContent = result;
    results.appendChild(para);

    if(cpu == 5){
        const final = document.createElement("p");
        final.textContent = "CPU Wins the Game";
        results.appendChild(final);
        player = 0;
        cpu = 0;
    }
    if(player == 5){
        const final = document.createElement("p");
        final.textContent = "You Win the Game!"
        results.appendChild(final);
        player = 0;
        cpu = 0;
    }
    console.log(result);
    //return result;   
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

//DOM Section 
const buttons = document.querySelectorAll('button');
console.log(buttons.length);

//event listener
buttons.forEach(button => button.addEventListener('click', playRound));
//console.log(game());
