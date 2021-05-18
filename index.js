// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your project’s name?',
    name: 'project',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ["ISC", "MIT", "Apache 2.0"]
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'command',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
    default: "npm test"
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'repo',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribute',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        const htmlQuery = `# ${response.project}
        ## Description
        ${response.description}
        ## Table of Contents
        
        
        
        `

        fs.writeFileSync('README.md', htmlQuery)
    })
}

// Function call to initialize app
init();
