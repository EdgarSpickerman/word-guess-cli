const Letter = require("./Letter");

module.exports = (string) => {
  const ltrsArr = Array.from(string).map(ltr => Letter(ltr))

  const genValidLtrs = Array.from(string).filter((v, i, a) => a[v] === i)

  const genHangManWord = () => ltrsArr.map(ltr => ltr.getVal()).join("");

  const guessWord = (choice) => ltrsArr.map(ltr => ltr.guessed(choice));

  return {
    guess: (choice) => guessWord(choice),
    hangmanWord: () => genHangManWord(),
    validLetters: genValidLtrs
  }
} 