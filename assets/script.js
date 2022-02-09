var playAgain = true;

var Wins = 0;
var Losses = 0;
var Ties = 0; 

while (playAgain === true){
// Prompt on Page Load for the player to choose R, P or S
let playerChoice = prompt("Please enter R, P, or S");

// Declare array for later
var compChoices = ["R", "P", "S"];

// Object which allows for generating a number psuedo-randomly, with possible outputs 0, 1, or 2
var random = {
    getRandomInt: function(max){
        return Math.floor(Math.random() * max);
    }
}

// Declares a variable which pulls an integer using the above object
var compPicks = (random.getRandomInt(3));
var compPickSemantic = compChoices[compPicks];

window.alert ("Computer Player chooses " + compPickSemantic);

if ((playerChoice == "R" && compPickSemantic == "S") || (playerChoice == "S" && compPickSemantic =="P") || (playerChoice == "P" && compPickSemantic == "R")) {
    window.alert("You Win!"),
    Wins++    
} else if ((playerChoice == "S" && compPickSemantic == "R") || (playerChoice == "P" && compPickSemantic =="S") || (playerChoice == "R" && compPickSemantic == "P")) {
    window.alert ("You Lose!")
    Losses++
} else if ((playerChoice == "S" && compPickSemantic == "S") || (playerChoice == "P" && compPickSemantic =="P") || (playerChoice == "R" && compPickSemantic == "R")) {
    window.alert ("You Tie!")
    Ties++
}
else {
    window.alert ("You Forfeit!")
    Losses++
}

window.alert("Wins: " + Wins + " Losses: " + Losses + " Ties: " + Ties);

playAgain = confirm("Play again?")

}


// console.log(playerChoice);
// console.log(compChoices);
// console.log(compChoices[1]);

// console.log (compPicks)
// console.log (compPickSemantic)

