// Required packages for generator 
const fs = require("fs");
const inquirer = require("inquirer");

// README.md questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the project title!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project:",
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a project description!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "install",
            message: "If there is a installation process please write it out in code:",
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter a project useage!');
                  return false;
                }
              }
        },
        {
            type: "list",
            name: "licences",
            message: "What licences will go along with this project:",
            choices: [
                "Apache","Academic","GNU","Mozilla","Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How should people help contribute to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "If there are tests needed done for this project please describe them:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username: ",
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please enter a Github username!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email please:",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }
        }
    ]);
} 

// function to generate markdown for README
const generateMD = data => {
  return `
  # ${ data.title }
  ![badge](https://img.shields.io/badge/License-${ data.licences }-blue.svg)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [Licences](#licences)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
    
  ## Description
  ### ${data.description}

  ## Install
  \`\`\`
  ${data.install}
  \`\`\`
          
  ## Usage
  ### ${data.usage}
          
  ## Licences 
  This project is licenced under ${data.licences}
          
  ## Contribution
  ### ${data.contributing}
            
  ##  Tests
  ### ${data.tests}

  ## Questions?
  * [${data.github}](https://github.com/${data.github})
  * <${data.email}>

  <img src="https://github.com/${data.github}.png" alt="GitHub Profile Pic" width="150" height="150">
  
    `;
  }

module.exports = generateMD;

// function to initialize program
const init = () => {
    console.log(`
=================
Create a README!!
=================
`);
questions()
    .then(data => {
        fs.writeFile('assets/demo/README.md', generateMD(data), err => {
            if (err) throw err;
            console.log('Your README has been created in the "demo" folder')
        });
    })
}

// function call to initialize program
init();

