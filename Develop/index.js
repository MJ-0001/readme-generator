// Packages required for the application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user 
const questions = [
{
  type: 'input',
  message: 'What is the title of the project?',
  name: 'title'
},
{
  type: 'input',
  message: 'What is the purpose of the project?',
  name: 'description'
},
{
  type: 'input',
  message: 'Provide a table of contents',
  name: 'contents'
},
{
  type: 'input',
  message: 'Packages required to install: ',
  name: 'install'
},
{
  type: 'input',
  message: 'Provide usage instructions: ',
  name: 'instructions'
},
{
  type: 'input',
  message: 'List any contributors and resources: ',
  name: 'credits'
},
{
  type: 'list',
  message: 'What license is used?',
  name: 'license',
  options: ['Apache', 'GNU GPL', 'MIT', 'ISC', 'BSD 2', 'BSD 3']
},
{
  type: 'input',
  message: 'Guidelines for other contributors: ',
  name: 'contributions'
},
{
  type: 'input',
  message: 'What tests are included for the application: ',
  name: 'tests'
}
];

inquirer.prompt(questions).then(answers => {
  console.log('test')
});





// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
}

// // TODO: Create a function to initialize app
function init() {
  const data = inquirer.prompt(questions);
  const readme = generateMarkdown(data);
  writeToFile('README.md', readme);
}

// // Function call to initialize app
init();
