#!/usr/bin/env node
console.clear()

const HOUSE = require('./house');
const inquirer = require('inquirer');
const {isPlayerReady} = require("./questions");

console.log(HOUSE);

console.log('         You find yourself in the basement of a house, no windows and its dark');

//Main Start
inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name',

    }])
    .then(isPlayerReady);
