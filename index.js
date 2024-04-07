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
    return `It's a tie!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  }

  function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt(`Whats your selection (rock, paper, scissors)`);
      const computerSelection = getComputersChoice();
      const roundResults = playRound(playerSelection, computerSelection);
      console.log(roundResults);

      if (roundResults.startsWith('You win')) {
        playerScore++;
      } else if (roundResults.startsWith('You lose')) {
        computerScore++;
      }
      const finalScore = playerScore > computerScore ? 'You Win' : (playerScore === computerScore ? "It's a tie" : "You lose");
      console.log(`Final Score : You ${playerScore} , Computer ${computerScore}`);
      console.log(finalScore);
      
      }

    }

  playGame();
  