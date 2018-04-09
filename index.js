const Word = require("./lib/constructors/Word");
const CLI = require("./lib/constructors/Cli");
const wordBank = require("./lib/data/wordBank");

const Game = (words) => {
  const addWin = () => {};
  const addLoss = () => {};
  const generateWord = (words) => {
    const genRandomIndex = (words) => Math.floor(Math.random() * words.length);
    return words[genRandomIndex(words)];
  };

  return {
    count:6,
    word: Word(generateWord(words)),
    cli: CLI(),
    validations:function(){
      if(this.word.hangmanWord().indexOf("_") === -1) return true;
      if(this.count === 0) return true;
    },
    start: function () {
      return this.cli.welcomeMessage().then(data=>'');
    },
    takeTurns:function(){
      if(this.validations()) return this.continue()
      return this.nextTurn().then(word=>this.cli.print(word))
        .then(this.takeTurns())
    },
    nextTurn: function () {
      return this.cli.prompt().then(answer=>{
        this.word.guess(answer.choice_question);
        return this.word.hangmanWord()
      })
    },
    continue:function(){

    },
  }
}

let game = Game(wordBank);

game.start()
  .then(data=> game.takeTurns())
  .catch(error => console.log("An Error occurred:", error))