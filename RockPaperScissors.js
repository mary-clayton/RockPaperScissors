const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
}
// console.log(getUserChoice('rock'))
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0: 
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Error'    
  }
}
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
      return 'Tie'
  }
  if(userChoice == 'bomb' && computerChoice) {
      return 'User Wins'
  }
  if(userChoice == 'paper' && computerChoice == 'rock') {
      return 'User wins'
  }
  if(userChoice == 'rock' && computerChoice == 'scissors') {
      return 'User wins'
  }
  if(userChoice == 'scissors' && computerChoice == 'paper') {
      return 'User wins'
  }
   if(userChoice == 'scissors' && computerChoice == 'rock') {
      return 'Computer wins'
  } 
   if(userChoice == 'paper' && computerChoice == 'scissors') {
      return 'Computer wins'
  } 
  if(userChoice == 'rock' && computerChoice == 'paper') {
      return 'Computer wins'
  } else {
    return 'No winner'
  }
  
}

// console.log(determineWinner('paper', 'paper'))

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('Computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
