// Packages required for the application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Inquirer prompt method called on object array to pose each question 
inquirer.prompt([
{
  type: 'input',
  message: 'What is the title of the project? ',
  name: 'title'
},
{
  type: 'input',
  message: 'What is the purpose of the project? ',
  name: 'description'
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
  type: 'input',
  message: 'Guidelines for other contributors: ',
  name: 'contributions'
},
{
  type: 'input',
  message: 'What tests are included for the application: ',
  name: 'tests'
},
{
  type: 'rawlist',
  message: 'What license is used?',
  name: 'license',
  choices: ['Apache', 'MIT', 'BSD 2', 'BSD 3', 'none']
},
{
  type: 'input',
  message: 'Enter your Github username: ',
  name: 'git'
},
{
  type: 'input',
  message: 'Enter your email address: ',
  name: 'email'
}
]).then(answers => {
  readMeFile(answers);
})

// Function to write answers to readme file
function readMeFile(arr) {
  const readme = generateMarkdown(arr)
  fs.writeFile('README.md', readme, (err) =>
  err ? console.error('error, please re-run the program') : console.log('Success!'));
}


