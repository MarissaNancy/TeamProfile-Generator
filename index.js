//require
//fs is for writing the file
const fs = require('fs');
//inquirer so that it will ask questions 
const inquirer = require('inquirer');
// we need these constructors
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const team = [];

//change to function and add .then promise

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
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
        }
        //add missing questions here
    ])
    this.engineer = new Engineer(
        employees.name,
        employees.id,
        employees.email,
        // employees.position,
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
        // employees.position,
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
        },
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
        }
        //add questions here
        
    ])
    this.intern = new Intern(
        employees.name,
        employees.id,
        employees.email,
        // employees.position,
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