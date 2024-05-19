#! /usr/bin/evn node

import inquirer from "inquirer";
import chalk from "chalk";

//1) computer will generate a random num.

//2) user input  for guessing number.

//3) computer compare user input with coputer genrated number and show result

console.log(chalk.italic.cyan(` ***_WELLCOM TO MY " NUMBER GUESS GAME "_*** `));

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please gues a number 1-10:",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log(chalk.italic.magenta("congratulations! you guessed right number."));
} else {
  console.log(chalk.dim.red(" you guessed wrong number. 'Try Again'"));
}

console.log(chalk.italic.yellowBright(" =======>THE END<======= "));
