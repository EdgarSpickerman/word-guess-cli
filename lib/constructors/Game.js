const Word = require("./Word");

module.exports = () => {
  let state = {
    word: null,
    guesses: 0,
    letters: [],
    max: 6,
  }
  // gets
  const getGuesses = () => state.guesses;
  const getWord = () => state.word;
  const getMax =() => state.max;
  const getLtr =() => state.letters.join(",");

  // sets
  const setGuesses = (val) => state.guesses += val;
  const setWord = (word) => state.word = word;
  const setLtrs = (letter) => state.letters.push(letter);

  // methods
  const randomizeIndex = (arr) => Math.floor(Math.random() * arr.length);
  
  const displayWord = () => getWord().hangManWord();

  const isHanged =()=> displayWord().indexOf("_") === -1;
  
  const randomizeArr = (arr) => arr[randomizeIndex(arr)]

  const loading = (arr) => {
    const randomWord = randomizeArr(arr)
    setWord(Word(randomWord))
  };

  const createString = () => {
    return `Your status: ${displayWord()}
    Your Guesses Left: ${getMax() - getGuesses()}
    You have guessed these letters so far ${getLtr()}\n`
  }

  const playRound = (choice) => {
    setGuesses(1)
    setLtrs(choice);
    getWord().guess(choice)
    return createString()
  }

  return {
    loading: loading,
    playRound: playRound,
    getGuesses: getGuesses,
    isHanged: isHanged,
  }
}