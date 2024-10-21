import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";


export const welcome = "Welcome to Palindrome wordplay!";
const msg = chalk.italic.bold(welcome);

export const description = "A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.\nSome common examples include: \n";


export const boxedMsg = boxen(msg, {
    padding: 1,
    borderStyle: "double",
    borderColor: "cyan",
  });
  
export const palindromeExamples = {
  "Single Words": [
      "Racecar",
      "Level",
      "Rotor",
      "Civic",
      "Madam"
  ],
  "Phrases": [
      "A man, a plan, a canal, Panama!",
      "Was it a car or a cat I saw?",
      "No lemon, no melon",
      "Able was I ere I saw Elba",
      "Eva, can I see bees in a cave?"
  ],
  "Numbers": [
      121,
      12321,
      1234321,
      45654,
      555555
  ],
  "Sentences": [
      "Mr. Owl ate my metal worm.",
      "Do geese see God?",
      "Madam, in Eden, I’m Adam.",
      "Never odd or even.",
      "Step on no pets."
  ]
};