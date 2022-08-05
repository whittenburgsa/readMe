// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require ("path");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title', 
    message: 'What is the name of your project?',
 },

 {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
 },

 {
    type: 'input',
    name: 'installation',
    message: 'Please list installation instructions',
 },
 
 {
   type: 'input',
   name: 'credits',
   message: 'Please list any credits',
},

 {
    type: 'input',
    name: 'usage',
    message: 'Please describe how this project will be used',
 },

 { type: 'list',
    name: 'license',
    message: 'Please choose your license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
 },

 { type: 'input',
   name: 'contributions',
   message: 'Please describe contributions/name contributers',
 },

 { type: 'input',
   name: 'tests',
   message: 'What is the test process for this project',
 },

 { type: 'input',
   name: 'email',
   message: 'What is your email',
 },

 {
   type: 'input',
   name: 'github',
   message: 'What is your github username',
 }
 
];

function writeToFile (fileName, data) {
   return fs.writeFileSync (path.join(process.cwd(),"/dist", fileName), data)
}


// TODO: Create a function to write README file
function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, err) => {
      if (err) console.log(err)
        console.log("Making ReadMe");
        writeToFile("ReadMe.md", generateMarkdown(inquirerResponse));
    })
   //  .catch((err)); {
   //      console.log(err);
   //  }
}

init();