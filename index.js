//require
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const Employees = require('./lib/employees');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const { createHistogram } = require('perf_hooks');

var team = [];


//async helps write promise based code like if it was synch but doesnt block execution thread
async function promptUser (){
    const { name, id, email, office } = await inquirer.prompt([
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
        },
        {
            type: 'input',
            message: 'What is your position?',
            name: 'office',
        },
    ]);

    const manager = new Manager (name, id, email, office)
    team.push(manager);
    creatTeam();
    //employee concstructor that will grab position and will prompt questions based off of that
    // this.employees = new Employees(name, id, email, position);
    // if (this.employees.position === 'Engineer') {
    //     promptEngineer(this.employees);
    // } else if (this.employees.position === 'Manager') {
    //     promptManager(this.employees);
    // } else if (this.employees.position === 'Intern') {
    //     promptIntern(this.employees);
    // }
};

function creatTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamChoice",
            message: "Would you like to add a new team memeber?",
            choices: ["Engineer", "Intern", "I dont want to add anymore team members"]
        }
    ]).then(userChoice =>{
        switch (userChoice.teamChoice) {
            case "Engineer":
                promptEngineer();
                break;
              case "Intern":
                    promptIntern();
                    break;
            default:
                // this should be a function that renders you team in HTML
        }
    })
}


//prompting user based off engineer position 
promptEngineer = async (employees) => {
    const { github } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
        }
        //add missing questions here
    ])
    this.engineer = new Engineer(
        employees.name,
        employees.id,
        employees.email,
        employees.position,
        github
    );
    console.log(this.engineer);

};

promptManager = async (employees) => {
    const { office } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        }
    ])
    this.manager = new Manager(
        employees.name,
        employees.id,
        employees.email,
        employees.position,
        office
    );
    console.log(this.manager);
};

promptIntern = async (employees) => {
    const { school } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school',
        }//add questions here 
    ])
    this.intern = new Intern(
        employees.name,
        employees.id,
        employees.email,
        employees.position,
        school
    );
    console.log(this.intern);
};



promptUser();

// function writeToFile(filename, data) {
//     return fs.writeFileSync(path.join(process.cwd(), filename), data)
// }

// function init() {
//     inquirer.prompt(questions).then((responses)=>{
//         writeToFile('index.html', generateHTML({...responses}))
//     })
// }

//init();