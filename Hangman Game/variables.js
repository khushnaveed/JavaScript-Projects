import boxen from "boxen";

const welcomeMsg = "Welcome to the Hangman Game! 🎉🔠💀";
const gameOverMessage =
  "👾 😵 🎮 💀 🕹️ ☠️ ❌ 🎮. 🎲 😈... GAME OVER...👾 😵 🎮 💀 🕹️ ☠️ ❌ 🎮. 🎲 😈";
const congratsMsg =
  "🥳🎉👏🤝👍🌷 Congratulations! You've guessed the word correctly! 🥳🎉👏🤝👍🌷 ";

const boxedMsg = boxen(welcomeMsg, {
  padding: 1,
});

const boxedMsgGameOver = boxen(gameOverMessage, {
  padding: 0.5,
});

const boxedMsgCongrats = boxen(congratsMsg, {
  padding: 0.5,
});

export { boxedMsg, boxedMsgGameOver, boxedMsgCongrats };
