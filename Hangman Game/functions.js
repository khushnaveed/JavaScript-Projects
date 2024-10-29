import fs from "fs";
import chalk from "chalk";
import { boxedMsgCongrats } from "./variables.js";

// a function that reads the file asynchronously
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        reject(err); // Reject the promise if there's an error
        return;
      }
      resolve(data); // Resolve the promise with the data
    });
  });
};

// a function that print the text in the center of the terminal
const centerBoxedMessage = (boxedMessage) => {
  const terminalWidth = process.stdout.columns; // Get the terminal width
  const lines = boxedMessage.split("\n"); // Split the boxed message into lines

  // Calculate how much padding is needed for centering
  const maxLength = Math.max(...lines.map((line) => line.length)); // Get the maximum length of lines
  const totalPadding = Math.max(0, Math.floor((terminalWidth - maxLength) / 2)); // Ensure padding is at least 0

  // Center each line
  const centeredLines = lines.map((line) => {
    return " ".repeat(totalPadding) + line; // Add spaces to the left for centering
  });

  return centeredLines.join("\n"); // Join the centered lines back together
};

// a function for getting a random word array from the string data for the game
const getRandomWord = (stringData) => {
  const array = stringData.split("\n");
  const randomInteger = Math.floor(Math.random() * array.length);
  let randomWord = array[randomInteger].split("");
  return randomWord;
};

// a function which will take random word of the game and map it into new guessing array
const gameWordPuzzle = (randomWord) => {
    let gameWordPuzzle = randomWord.map(() => "_");
    return gameWordPuzzle; 
};

// a function for checking if user won the game by comparing the random word with the game word map
const gameWin = (gameWordMapArray, randomWordArray) => {
    if (gameWordMapArray.join("") === randomWordArray.join("")) {
      console.log(centerBoxedMessage(chalk.bgGreen.black.bold("Correct Word: " + randomWordArray.join(""))));
      console.log(centerBoxedMessage(chalk.bgGreen.black.bold(boxedMsgCongrats)));
      return true; // Indicates the player has won
    }
    return false; // Game continues if not a match
};
  
// a function which will process the guess from the user
function processGuess(randomWord, guessAlphabetWord, gameWordMap) {
    if (randomWord.includes(guessAlphabetWord)) {
        // Check if the letter is already in gameWord to avoid repeated guesses
        if (gameWordMap.includes(guessAlphabetWord)) {
          console.log(
            "You've already guessed that letter! Try a different one."
          );
        } else {
          // Update all occurrences of the guessed letter in gameWord
          randomWord.forEach((letter, index) => {
            if (letter === guessAlphabetWord) {
              gameWordMap[index] = guessAlphabetWord;
            }
          });
          console.log("Correct Guess ✅");
          console.log(centerBoxedMessage(chalk.bold(gameWordMap)));
        }
      } else {
        console.log(centerBoxedMessage(chalk.bold(gameWordMap)));
        console.log("Incorrect Guess ❌");
      }
}

export {readFileAsync, centerBoxedMessage, getRandomWord, gameWordPuzzle, gameWin, processGuess};