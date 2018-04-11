module.exports = (char) => {
  let state = {
    guessed: false,
    value: char,
    filler: "_",
  };

  // gets
  const getStatus = () => state.guessed;
  const getVal = () => state.value;
  const getFiller = () => state.filler;

  //sets
  const setStatus = (value) => state.guessed = value;


  // methods
  const check = (choice) => {
    if (choice === getVal()) setStatus(true)
  }

  // public instance functions that outside objects can interact with 
  return {
    getChar: () => getStatus() ? getVal() : getFiller(),
    guessed: (choice) => check(choice),
  }
}