import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
import boxen from "boxen";

import centerBoxedMessage from "./functions.js";
import { Palindrome } from "./classes.js";
import { description, welcome, palindromeExamples } from "./variables.js";
import { table } from "./table.js";

console.clear();

/* const palindrome = new Palindrome("My age is 0, 0 si ega ym.");
console.log(palindrome.checkText());
 */

// creating and styling welcome message
const msg = chalk.italic.bold(welcome);
const boxedMsg = boxen(msg, {
  padding: 1,
  borderStyle: "double",
  borderColor: "cyan",
});

console.log(centerBoxedMessage(boxedMsg));
console.log(chalk.underline("\nLittle Background behind it:\n"));
console.log(centerBoxedMessage(description));

// Print the styled table
console.log(centerBoxedMessage(table.toString()));

//Print different option for user to select
const prompt = inquirer.createPromptModule();
const choices = Object.keys(palindromeExamples);
const answer1 = await prompt({
  type: "list",
  name: "Selected Option",
  message: "Select your option >> ",
  choices: choices,
});
console.log(answer1);