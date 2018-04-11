const Letter = require("./Letter");

module.exports = (string) => {
  //attributes
  const ltrsArr = Array.from(string).map(ltr => Letter(ltr))

  // methods
  const genHangManWord = () => ltrsArr.map(ltr => ltr.getChar()).join("");

  const guessWord = (choice) => ltrsArr.map(ltr => ltr.guessed(choice));

  return {
    guess: (choice) => guessWord(choice),
    hangManWord: () => genHangManWord(),
  }
}