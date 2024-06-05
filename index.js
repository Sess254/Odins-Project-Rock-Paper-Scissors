let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')


buttons.forEach(button=>{
  button.addEventListener('click', function(){
    playRound(button.value)
  })

})

function disableAllButtons() {
  buttons.forEach(elements =>{
    elements.disabled = true 
  })
}


function getComputersChoice () {
  const choices = [
    "rock",
    "paper",
    "scissors"
  ]
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputersChoice()
  let results = ''

  const winCombo = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (winCombo[playerSelection] === computerSelection){
    playerScore ++
    results = (`You win! ${playerSelection} beats ${computerSelection} <br>Player's score: ${playerScore} <br>Computer's score: ${computerScore}`)
    if (playerScore === 5) {
      results += `<br>You won the game! Reload the page to play again`
      disableAllButtons()
    }
  } else if (playerSelection === computerSelection) {
    results = (`It's a tie! you both choose ${playerSelection}<br> Player's score: ${playerScore}<br> Computer's score: ${computerScore}`)
  } else {
    computerScore ++
    results = (`You lose! ${computerSelection} beats ${playerSelection}<br>Player's score: ${playerScore}<br>Computer's score:${computerScore}`)
    if (computerScore === 5) {
      results += `<br>You Lost the game! Reload the page to play again`
      disableAllButtons()
    }
  }

  document.getElementById('game-results').innerHTML = results
  
}
