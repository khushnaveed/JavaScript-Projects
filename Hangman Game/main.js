import inquirer from "inquirer";
import chalk from "chalk";

import {
  readFileAsync,
  centerBoxedMessage,
  getRandomWord,
  gameWordPuzzle,
  gameWin,
  processGuess,
} from "./functions.js";
import { boxedMsg, boxedMsgGameOver } from "./variables.js";

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
      console.log(centerBoxedMessage(chalk.bold(gameWordMap)));

      // do while loop untill the user run out of the maximum guesses
      do {
        console.log("Remianing Chances: ", counter);

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

        // calling processGuess function to process the guess word with the random word array
        processGuess(randomWord, guessAlphabet.Word, gameWordMap);

        // calling gameWin to check if user won the game
        if (gameWin(gameWordMap, randomWord)) {
          break;
        } else {
          counter -= 1;
        }
      } while (counter > 0);

      // checking if counter is 0 then print msg game over
      if (counter === 0) {
        console.log(centerBoxedMessage(chalk.bgRed.bold(boxedMsgGameOver)));
      }
      break;



    
    case "Fruits":
      const fruitsData = await readFileAsync("./Sample-words/fruits.txt");
      const randomWordFruits = getRandomWord(fruitsData);
      console.log("random word", randomWordFruits);
    
      const gameWordMapFruits = gameWordPuzzle(randomWordFruits);
      let counterFruits = gameWordMapFruits.length + 5;

      console.log("Length of the word: ", gameWordMapFruits.length);
      console.log(centerBoxedMessage(chalk.bold(gameWordMapFruits)));

      do {

        console.log("Remianing Chances: ", counterFruits);
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
        processGuess(randomWordFruits, guessAlphabet.Word, gameWordMapFruits);
        if (gameWin(gameWordMapFruits, randomWordFruits)) {
          break;
        } else {
          counterFruits -= 1;
        }

      } while (counterFruits > 0);

      if (counterFruits === 0) {
        console.log(centerBoxedMessage(chalk.bgRed.bold(boxedMsgGameOver)));
      }
      break;



    
    case "Furniture":
      const furnitureData = await readFileAsync("./Sample-words/furniture.txt");
      const randomWordFurniture = getRandomWord(furnitureData);
      console.log("random word", randomWordFurniture);
      const gameWordMapFurniture = gameWordPuzzle(randomWordFurniture);
      let counterFurniture = gameWordMapFurniture.length + 5;
      console.log("Length of the word: ", gameWordMapFurniture.length);
      console.log(centerBoxedMessage(chalk.bold(gameWordMapFurniture)));

      do {

        console.log("Remianing Chances: ", counterFurniture);
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
        processGuess(randomWordFurniture, guessAlphabet.Word, gameWordMapFurniture);
        if (gameWin(gameWordMapFurniture, randomWordFurniture)) {
          break;
        } else {
          counterFurniture -= 1;
        }

      } while (counterFurniture > 0);

      if (counterFurniture === 0) {
        console.log(centerBoxedMessage(chalk.bgRed.bold(boxedMsgGameOver)));
      }
      break;




    case "Quit":
      console.log("Exiting program...\n");
      process.exit(0);
      break;



    
    default:
      console.log(`This is an invalid option..!\nTry again..!`);
      break;
  }
} while (true);
