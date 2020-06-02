// Required packages for generator 
const inquirer = require("inquirer");
const fs = require("fs");

// inquirer will start to gather information to write README.md file
function promptUser () {
    return inquirer.prompt([
        {
            type: `input`,
            name: `repo`,
            message: `Create a new repository.`,
            validate: validator
        },
        {
            type: `input`,
            name: `description`,
            message: `Write a short description for your project.`, 
            validate: validator
        },
        {
            type: `input`,
            name: `author`,
            message: `Enter the authors first and last name.`, 
            validate: validator
        },
        {
            type: `input`,
            name: `github`,
            message: `Enter your GitHub Username.`, 
            validate: validator
        },
        {
            type: `input`,
            name: `install`,
            message: `How's your application installed?`, 
            validate: validator
        },
        {
            type: `input`,
            name: `license`,
            message: `Would you like to add a license for your project? Press enter to skip.`, 
            validate: validator
        },
        {
            type: `input`,
            name: `contributors`,
            message: `List any additional contributors. Press enter if you're the only one.`, 
            validate: validator
        },
        {
            type: `input`,
            name: `FAQ`,
            message: `For further questions please enter your email.`, 
            validate: validator
        },
    ]);
}
