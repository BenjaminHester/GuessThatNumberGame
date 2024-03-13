// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

alert (`Welcome to GUESS THAT NUMBER! Please click OK to start the game.`)

while (restartGame){
    rangeNum = prompt(`Please enter a maximum number for the range:`);
    rangeNum = parseInt(rangeNum);
    while (rangeNum <= 1 || !rangeNum){
        rangeNum = prompt(`Please enter a number greater than 1`);
        rangeNum = parseInt(rangeNum);
    }
    randomNum = Math.floor(Math.random() * rangeNum) + 1
    // alert(randomNum);
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));
    while (attempts <= 1 || !attempts || attempts >= rangeNum){
        attempts = prompt(`Please enter a number from 1 to ${rangeNum-1}`);
        attempts = parseInt(attempts);
    }
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left.`);
    while(true){
        guess = parseInt(guess);
        while(!guess || guess<1 || guess > rangeNum){
            guess = prompt(`Please enter a number from 1 to ${rangeNum}`);
            guess = parseInt(guess);
        };
        attempts--;
        if(guess===rangeNum) {
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER:${randomNum}`) 
            break;
        }else if (attempts === 0) {
            alert(`Sorry- it seems you're out of attempts. GAME OVER \nThe Number was ${randomNum}`)
        }else if (guess<randomNum) {
            alert(`TOO LOW. You have ${attempts} attempt(s) left.`)
        }else (guess>randomNum) {
            alert(`TOO HIGH. You have ${attempts} attempt(s) left.`)
        }
        break;
    };
    // break;
};