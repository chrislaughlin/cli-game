const question = require('./question');

const doorCheck = () => {
    question(
        {
            type: 'checkbox',
            name: 'stuff',
            message: `You find some items, what do you pick up`,
            choices: [
                'swiss army knife',
                'Beer',
                'hammer',
                'dust',
            ]
        }
    ).then(ans => {
        console.log(
            `Good choice you picked up ${ans.stuff.length === 0 ? 'nothing' : ans.stuff.join(', ')}`
        );
    })
};

const firstChoice = () => {
    question(
        {
            type: 'list',
            name: 'choice',
            message: `What do you want to do`,
            choices: [
                'Look for a light',
                'Check for the door',
                'Look for a window',
                'Sip a glass of wine',
            ]
        }
    ).then(answers => {
        switch (answers.choice) {
            case 'Look for a light':
                console.log('🌚 There is no light switch 🌚')
                firstChoice();
                break;
            case 'Check for the door':
                doorCheck()
                break;
            case 'Look for a window':
                console.log('🌚 There is no windows 🌚')
                firstChoice();
                break;
            case 'Sip a glass of wine':
                console.log('🌚 time to get drunk 🌚')
                firstChoice();
                break;
        }
    });
}

const isPlayerReady = answers =>{
    question(
        {
            type: 'confirm',
            name: 'ready',
            message: `Welcome ${answers.name}, are you ready for you adventure`,
        }
    ).then(confirmAnswers => {
        if (confirmAnswers.ready) {
            console.log('welcome to the game');
            firstChoice();
        } else {
            console.log('Fuck off')
        }
    });
}

module.exports = {
    isPlayerReady
}
