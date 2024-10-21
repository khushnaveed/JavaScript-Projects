import inquirer from "inquirer";
import chalk from "chalk";

import centerBoxedMessage from "./functions.js";
import { Palindrome } from "./classes.js";
import {
  description,
  palindromeExamples,
  boxedMsg,
} from "./variables.js";
import { table } from "./table.js";


console.clear(); 

// creating and styling welcome message
console.log(centerBoxedMessage(boxedMsg));
console.log(chalk.underline("\nLittle Background behind it:\n"));
console.log(centerBoxedMessage(description));

// Print the styled table
console.log(centerBoxedMessage(table.toString()));

//Print different option for user to select
const prompt = inquirer.createPromptModule();
let choices = [...Object.keys(palindromeExamples), "Quit"]; // adding quit option to the options

// Remove the Phrase option
const indexToRemove = choices.indexOf("Phrases");
choices.splice(indexToRemove, 1); 

do {

  const answer1 = await inquirer.prompt({
      type: "list",
      name: "Selected Option",
      message: "Select your option >> \n",
      choices: choices,
  });

  const selectedChoice = answer1["Selected Option"]; 

  switch (selectedChoice) {

      case choices[0]: // Single Words
          const wordInput = await inquirer.prompt({
              type: "input",
              name: "wordPalindrome",
              message: `Enter a Single Word palindrome for ${selectedChoice}:\n`,
              validate: function (input) {
                  const isValid = /^[A-Za-z]+$/.test(input);
                  return isValid || "Please enter a valid word (letters only).";
              },
          });
          const palindrome0 = new Palindrome(wordInput.wordPalindrome);
          console.log(palindrome0.checkText());
          break;

      case choices[1]: // Numbers
          const numberInput = await inquirer.prompt({
              type: "input",
              name: "numberPalindrome",
              message: `Enter a number palindrome for ${selectedChoice}:\n`,
              validate: function (input) {
                  const isValid = /^\d+$/.test(input); // Check if input is a number
                  return isValid || "Please enter a valid number.";
              },
          });
          const palindrome1 = new Palindrome(numberInput.numberPalindrome);
          console.log(palindrome1.checkText());
          break;

      case choices[2]: // Sentences
          const sentenceInput = await inquirer.prompt({
              type: "input",
              name: "sentencePalindrome",
              message: `Enter a Sentence palindrome for ${selectedChoice}:\n`,
          });
          const palindrome2 = new Palindrome(sentenceInput.sentencePalindrome);
          console.log(palindrome2.checkText());
          break;

      case choices[3]: // Quit
          console.log("Exiting program...\n");
          process.exit(0);
          break;

      default:
          console.log(`\nYou selected: ${selectedChoice}\nThis is an invalid option..!\NTry again..!`);
          break;
  }

} while (true);