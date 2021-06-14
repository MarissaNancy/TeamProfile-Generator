//require
// const fs = require('fs');
const inquirer = require('inquirer');
//path
const Employees = require('./lib/employees');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

//async helps write promise based code like if it was synch but doesnt block execution thread
promptUser = async () => {
const { name, id, email, position } = await inquirer.prompt ([
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
        message: 'What is your positon?',
        name: 'position',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]);
//employee concstructor that will grab position and will prompt questions based off of that
this.employees = new Employees(name, id, email, position);
if (this.employees.postion === 'Engineer') {
    promptEngineer(this.employees);
} else if (this.employees.postion === 'Manager') {
    promptManager(this.employees);
} else if (this.employees.postion === 'Intern'){
    promptInter(this.employees);
}
};


//prompting user based off engineer position 
promptEngineer = async (employees) =>{
    const { github} = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name:'github',
        }
    ])
    this.engineer = new Engineer (
        employees.name,
        employees.id,
        employees.email,
        employees.position,
        github
    );
    console.log(this.engineer);

};

promptManager = async (employees) =>{
    const { office } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        }
    ])
    this.manager = new Manager (
        employees.name,
        employees.id,
        employees.email,
        employees.position,
        office
    );
    console.log(this.manager);
};

promptIntern = async (employees) =>{
    const { school } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school',
        }
    ])
    this.intern = new Intern (
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