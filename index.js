#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random num.
//2) user input  for guessing number.
//3) computer compare user input with coputer genrated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please gues a number 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log(" you guessed wrong number. 'Try Again'");
}
console.log("THE END");
