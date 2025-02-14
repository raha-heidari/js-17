let randomNumber = Math.floor(Math.random() * 100 + 1);
let tryUser = 0 

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector('.inputs-Values').value;
 const output = document.querySelector(".final-output")
 if (guess === "" || isNaN(guess) || guess < 1 || guess > 100){
 output.textContent = "Enter number between 1 and 100"
 return;
 }

 tryUser++
 if(guess > randomNumber){
 output.textContent = "Number is too high, try again."
 } else if(guess < randomNumber){
  output.textContent = "Number is too low, try again."
 } else{
  output.textContent = `Guess is correct! You win! The number was ${randomNumber}. It took you ${tryUser} tries`
 }
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
  randomNumber = Math.floor(Math.random() * 100) + 1
    tryUser = 0
  document.querySelector(".input-Values").value = ""
  document.querySelector(".final-out").textContent = ""
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);
