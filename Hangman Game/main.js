import inquirer from "inquirer";
import chalk from "chalk";

import { readFileAsync, centerBoxedMessage } from "./functions.js";
import { msg, msgOption } from "./variables.js";

//print a welcome msg
console.log(centerBoxedMessage(chalk.bgRedBright.bold(msg)));

//do-while loop declaration
do {

  //getting user option
  const userAnswer = await inquirer.prompt({
    type: "list",
    name: "selectedOption",
    message: "Select your option >>",
    choices: ["Animals", "Fruits", "Furniture", "Quit"],
  });
  
  //print user option
  console.log(userAnswer);

  //switch case for implementing user#s 
  switch (userAnswer.selectedOption) {
    case "Animals":
      console.log(msgOption);
      const animalsData = await readFileAsync("./Sample-words/animals.txt");
      console.log(animalsData);
      console.log("________________________");
      break;

    case "Fruits":
      console.log(msgOption);
      const fruitsData = await readFileAsync("./Sample-words/fruits.txt");
      console.log(fruitsData);
      console.log("________________________");
      break;

    case "Furniture":
      console.log(msgOption);
      const furnitureData = await readFileAsync("./Sample-words/furniture.txt");
      console.log(furnitureData);
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
