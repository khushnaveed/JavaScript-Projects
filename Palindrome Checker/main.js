import inquirer from "inquirer";
import ora from "ora";
import chalk  from "chalk";
import boxen from 'boxen';

import centerBoxedMessage from './functions.js';
import { Palindrome } from './classes.js';



console.clear();

const palindrome = new Palindrome("My age is 0, 0 si ega ym.");
console.log(palindrome.checkText());

// creating and styling welcome message
const msg = chalk.italic.bold("Welcome to Palindrome wordplay!")
console.log("Little Background behind it: A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. Some common examples include:");

// Create a boxed message
const boxedMsg = boxen(msg, { 
  padding: 1, 
  borderStyle: 'double', 
  borderColor: 'cyan',
});

// Center the boxed message
const centeredBox = centerBoxedMessage(boxedMsg);

// Print the centered boxed message
console.log(centeredBox);