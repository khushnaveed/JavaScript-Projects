import chalk from "chalk";
import centerBoxedMessage from "./functions.js";

export class Palindrome {
  constructor(str) {
    this.str = str;
  }

  cleanText() {
    let cleanstr = this.str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    return cleanstr;
  }

  checkText() {
    const cleanStr = this.cleanText();
    const reverseText = cleanStr.split("").reverse().join("");
    return cleanStr === reverseText
      ? centerBoxedMessage(
          chalk.cyan.bgWhite(`...."Palindrome: Correct!"....\n`)
        )
      : centerBoxedMessage(
          chalk.bgRed(`...."Palindrome: Incorrect!"....\n`)
        );
  }
}
