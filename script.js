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
    randomNum = math.floor(math.random() * rangeNum) +1;
    alert(randomNum);
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));
    while (attempts <= 1 || !attempts || attempts >= rangeNum){
        attempts = prompt(`Please enter a number from 1 to ${rangeNum-1}`);
        attempts = parseInt(attempts);
    }
    break;
}