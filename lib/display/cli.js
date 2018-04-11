const inquirer = require("inquirer");
const questions = require("../data/questions").questionSet;
const messages = require("../data/messages").messages;
const testQ = require("../data/questions").testSet;

const print = (message) => console.log(message)

const setTimers = (message, time) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(console.log(message)), time)
  })
}

const welcomeMessage = () => {
  return Promise
    .all(messages.map(message => setTimers(message.text, message.time)));
}

const prompt = () => {
  return inquirer.prompt(questions)
}

module.exports = {
  welcomeMessage: welcomeMessage,
  prompt: prompt,
  print: print,
}