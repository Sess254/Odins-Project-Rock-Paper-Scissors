let playerSelection =  prompt("Whats Your selection? ").toLowerCase();

function getComputersChoice () {
  const choices = [
    "rock",
    "paper",
    "scissor"
  ]
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}