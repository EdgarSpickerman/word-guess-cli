module.exports = (char) => {
  let state = {
    guessed: false,
    value: char,
    filler: "_",
  };
  const getState = () => state.guessed;

  const setState = (value) => state = { ...state,...value}

  const check = (choice) => {
    choice === state.value ? setState({guessed: true}) : '';
  }

  return {
    getVal: () => getState() ? state.value : state.filler,
    guessed: (choice) => check(choice),
  }
}