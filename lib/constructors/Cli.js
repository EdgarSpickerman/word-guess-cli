const inquirer = require("inquirer");
const questions = require("../data/questions");

module.exports = () => {
  return {
    welcomeMessage:()=>inquirer
      .prompt([{type:'input',name:'welcome',message:'test'}]),
    prompt: () => inquirer.prompt(questions),
    print: (message) => console.log(message)
  }
}