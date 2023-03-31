let choices = new Array("rock","paper","scissors");
function getComputerChoice(){
    let cpuChoice;
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}

console.log(getComputerChoice());