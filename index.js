const Game = require("./lib/constructors/Game");
const ScoreBoard = require("./lib/constructors/ScoreBoard");
const cli = require("./lib/display/cli");
const resultMsg = require("./lib/data/messages").resultMsg;
const words = require("./lib/data/wordBank").words

const scoreboard = ScoreBoard();

const startGame = (words, results, display) => {
  let game = Game();

  const startRound=()=>{
    return cli.prompt()
      .then(answer => game.playRound(answer.choice))
      .then(result => cli.print(result))
      .then(() => playRounds())
  }

  const playRounds = () => {
    if (game.isHanged()) return resultMsg.winning;
    if (game.getGuesses() === 6) return resultMsg.lossing;
    return startRound()
  }

  game.loading(words);

  cli.welcomeMessage()
    .then(() => playRounds())
    .then(msg => cli.print(msg))
    .catch(err => console.log(err));
}

startGame(words, scoreboard, cli)