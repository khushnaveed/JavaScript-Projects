import inquirer from "inquirer";
import chalk from "chalk";

import {
  readFileAsync,
  centerBoxedMessage,
  getRandomWord,
  gameWordPuzzle,
} from "./functions.js";
import { boxedMsg, boxedMsgGameOver, boxedMsgCongrats } from "./variables.js";

console.clear();

//print a welcome msg
console.log(centerBoxedMessage(chalk.bgRed.bold(boxedMsg)));

//do-while for repeatedly asking user choice to select the game from different categories
do {
  //getting user's input from selection of list
  const userAnswer = await inquirer.prompt({
    type: "list",
    name: "selectedOption",
    message: "Select your option >>",
    choices: ["Animals", "Fruits", "Furniture", "Quit"],
  });

  //switch case for implementing users selection from list
  switch (userAnswer.selectedOption) {
    case "Animals":
      // calling readFileAsync function to read the string data from the file
      const animalsData = await readFileAsync("./Sample-words/animals.txt");

      // calling getRandomWord function to get the random word(array) from the data for the game
      const randomWord = getRandomWord(animalsData);
      console.log("random word", randomWord);

      // calling gameWorldPuzzle function to map a guess puzzle '_'
      const gameWordMap = gameWordPuzzle(randomWord);

      // setting couter as maximum number of user's guesses
      let counter = gameWordMap.length + 5;
      console.log("Length of the word: ", gameWordMap.length); // sending hint

      // do while loop untill the user run out of the maximum guesses
      do {
        console.log("Remianing Chances: ", counter);
        // getting alphabets step by step from the user
        const guessAlphabet = await inquirer.prompt({
          type: "input",
          name: "Word",
          message: "Guess the words step by step >>",
          validate: (input) => {
            if (!/^[a-zA-Z]$/.test(input)) {
              return "Please enter only a single letter.";
            }
            return true;
          },
        });

        if (randomWord.includes(guessAlphabet.Word)) {
          // Check if the letter is already in gameWord to avoid repeated guesses
          if (gameWordMap.includes(guessAlphabet.Word)) {
            console.log(
              "You've already guessed that letter! Try a different one."
            );
          } else {
            // Update all occurrences of the guessed letter in gameWord
            randomWord.forEach((letter, index) => {
              if (letter === guessAlphabet.Word) {
                gameWordMap[index] = guessAlphabet.Word;
              }
            });
            console.log("Correct Guess ✅");
            console.log(gameWordMap);
          }
        } else {
          console.log("Incorrect Guess ❌");
        }

        if (gameWordMap.join("") === randomWord.join("")) {
          console.log(centerBoxedMessage(chalk.bgGreen.black.bold("Correct Word: ", randomWord.join(""))));
          console.log(centerBoxedMessage(chalk.bgGreen.black.bold(boxedMsgCongrats)));
          break;
        }

        counter -= 1;
        
      } while (counter > 0);

      if (counter === 0) {
        console.log(centerBoxedMessage(chalk.bgRed.bold(boxedMsgGameOver)));
      }

      console.log("________________________");
      break;

    case "Fruits":
      const fruitsData = await readFileAsync("./Sample-words/fruits.txt");
      const randomWordFruits = getRandomWord(fruitsData);
      console.log("random word", randomWord);
      const gameWordMapFruits = gameWordPuzzle(randomWordFruits);
      let counterFruits = gameWordMap.length + 5;
      console.log("Length of the word: ", gameWordMapFruits.length);
      console.log("________________________");
      break;

    case "Furniture":
      const furnitureData = await readFileAsync("./Sample-words/furniture.txt");
      const randomWordFurniture = getRandomWord(furnitureData);
      console.log("random word", randomWord);
      const gameWordMapFurniture = gameWordPuzzle(randomWordFurniture);
      let counterFurniture = gameWordMap.length + 5;
      console.log("Length of the word: ", gameWordMapFurniture.length);
      console.log("________________________");
      break;

    case "Quit":
      console.log("Exiting program...\n");
      process.exit(0);
      break;

    default:
      console.log(`This is an invalid option..!\NTry again..!`);
      break;
  }
} while (true);
