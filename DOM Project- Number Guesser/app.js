

// GAME VALUES

let min =1,
    max= 10,  
    winningNum =2, 
    guessesLeft =3;
    
    
/// UI Elements
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }
  
  // Check if won
  if(guess === winningNum) {
    // Game Over -  won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  }else {
    guessesLeft-= 1;
    if(guessesLeft === 0){
      // game Over -  lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

    }else {
      
      // Game continues - answer wrong
        // Change border color
      guessInput.style.borderColor = 'red';
      // tell user it'a wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red') 
      //Clear Input
      guessInput.value = ''

    }
  }
});

// game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red ';
   // Disabled Input
   guessInput.disabled = true;
   // Change border color
   guessInput.style.borderColor = 'color';
   // Set text color
   message.style.color = color;
   // set message
   setMessage(msg)
}

// Set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}