#! /usr/bin/env node
import inqirer from "inquirer";
// 1) Computer generate a random number 
// 2) User input for guessing number
// 3) Compare user input with computer generateed number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inqirer.prompt([
    {
        name: "usergussingnumber",
        type: "number",
        message: "guess a number between 1 to 6",
    }
]);
if (answer.usergussingnumber === randomNumber) {
    console.log("Congratulation!" + " You guessed right number");
}
else {
    console.log("Sorry!" + " You guessed wrong number");
}
