const inquirer = require("inquirer");

const question = options => {
    const {
        type,
        name,
        message,
        ...rest
    } = options;

    return inquirer
        .prompt([{
            type,
            name,
            message,
            ...rest
        }]);
}

module.exports = question;
