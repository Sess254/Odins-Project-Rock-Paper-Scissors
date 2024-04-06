function getComputersChoice () {
  const choices = [
    "rock",
    "paper",
    "scissors"
  ]
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const winCombo = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (winCombo[playerSelection] === computerSelection){
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `You Draw`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  }
  