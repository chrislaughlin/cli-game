#!/usr/bin/env node

const figlet = require('figlet');
const inquirer = require('inquirer');

const HOUSE = require('./house');

console.clear()

console.log(HOUSE);

console.log(figlet.textSync('Welcome   Player', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));


const actionsPrompt = (choices) => {
    return {
        type: 'list',
        name: 'action',
        message: 'What do you do?',
        choices,
    }
};

function main() {
    console.log('You find yourself in the basement of a house, no window and its dark');
    firstMove();
}

function firstMove() {
    inquirer.prompt(actionsPrompt([
        'Look for a key',
        'Find the light switch',
        'Scream for Help',
        'Go back to sleep'
    ])).then((answers) => {
        console.log('TODO')
    });
}

main();
