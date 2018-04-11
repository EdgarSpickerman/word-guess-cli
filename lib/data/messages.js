let counter = 0;
const timeInc=1000;

const getTime =()=> {
  counter += 1
  return timeInc * (counter - 1)
}

module.exports = {
  messages: [{
      text: "Welcome to the last word you will ever see. Hangman a game where you guess a hidden word within 6 tries.",
      time: getTime(),
    },
    {
      text: "The rewards?",
      time: getTime(),
    },
    {
      text: "Well we wont hang you today if you win. Otherwise you will be taking a vacation six feet down under.",
      time: getTime(),
    },
    {
      text: "Lets begin....",
      time: getTime(),
    }
  ],
  resultMsg: {
    winning: "Gah, Darn it. Well looks like you get to live another day for now...",
    lossing: "Alright, Looks like the vultures are gonna be having a buffet today. Hang him boys and gals!!"
  }
}