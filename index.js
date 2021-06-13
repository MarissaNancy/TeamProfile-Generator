//require
// const fs = require('fs');
const inquirer = require('inquirer');
//path
const Employees = require('./lib/employees')
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const questions = [
    //
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },//link to email
    {
        type: 'input',
        message: 'What is your positon?',
        name: 'position',
    },
];

// function writeToFile(filename, data) {
//     return fs.writeFileSync(path.join(process.cwd(), filename), data)
// }

// function init() {
//     inquirer.prompt(questions).then((responses)=>{
//         writeToFile('index.html', generateHTML({...responses}))
//     })
// }

//init();