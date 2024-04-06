// use prompt() to get users selection
// need getComputersChoice function
// use something to make it choose randomly between rock paper and scissors
// need playRound function takes two parameters player playerSelection and computerSelection
// make the players selection case sensitive 
// use return console log later

// new function playGame that plays five rounds use console.log to print results;




let playerSelection =  prompt("Whats Your selection? ").toLowerCase();
let computerSelection = '';


function getComputersChoice () {
  let choices = [
    "rock",
    "paper",
    "scissor"
  ]
  let randomIndex = Math.floor(Math.random() * choices.length);
  computerSelection = choices[randomIndex];
  return computerSelection;
}

console.log(getComputersChoice(computerSelection));
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  let result;
  let resultCount = 0;
  if (playerSelection === 'rock' & computerSelection === 'paper'){
    return result = 'You lose, paper beats rock';
  } else if (playerSelection === 'scissor' & computerSelection === 'rock') {
    return result = 'You lose, rock beats scissor';
  } else if (playerSelection === 'paper' & computerSelection === 'scissor') {
    return result = 'You lose, scissor beats paper';
  } else if (playerSelection === 'paper' & computerSelection === 'rock') {
    return result = 'You win, paper beats rock';
  } else if (playerSelection === 'scissor' & computerSelection === 'paper') {
    return result = 'You win, scissor beats paper';
  } else if (playerSelection === 'rock' & computerSelection === 'scissor') {
    return result = 'You win, rock beats scissor'
  } else {
    return result = 'Its a draw';
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));