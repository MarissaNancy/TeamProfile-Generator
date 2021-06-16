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

function init() {
    startGenhtml();
    addMember();
}

//change to function and add .then promise

function addMember(){
    inquirer.prompt([{
        //
            type: 'input',
            name: 'name',
            message: "What is the team member's name?"
        },
        {
            type: "list",
            message: "What is the team memeber's role?",
            choices: ["Engineer", "Intern", "Manager"],
            name: 'position'
        },
        {
            type: 'input',
            message: "What is team member's id?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is team member's email?",
            name: 'email',
        }])
    .then(function({name, position, id, email}) {
        let positionInfo = '';
        if (position === 'Engineer'){
            positionInfo = 'Github username';
        } else if (position === 'Manager'){
            positionInfo = 'Office number';
        } else {
            positionInfo = 'School name';
        }
        inquirer.prompt([{
            type: 'input',
            name: 'positionInfo',
            message: "What is team member's ${positionInfo}",
        },
        {
            type: 'list',
            message: "Continue adding team member's?",
            choices: [
                'yes',
                'no'
            ],
            name:'moreMembers'
        }])
        .then(function({positionInfo, moreMembers}) {
            let newMember;
            if ( position === 'Engineer') { 
                newMember = new Engineer (name, id, email, positionInfo);    
            } else if (position === 'Intern') {
                newMember = new Intern (name, id, email, positionInfo);
            } else {
                newMember = new Manager (name, id, email, positionInfo);
            }
            team.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === 'yes') {
                    addMember();
                } else {
                    finishHtml();
                }
            });
        });

    });

};

function startGenhtml(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css" />
        <title>Employee Tracker</title>
    </head>
    <header>
        <h1> Team Generator</h1>
    </header>
    <body>
        <main>
            <br>
            <br>
            <div class="row">
                <div class="column">`;
    fs.writeFile('./dist/log.html', html, function(err) {
        if (err){
            console.log(err);
        }
    });
    console.log('start');
}

function addHtml(member){
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const position = member.getPosition();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";

        if (position === 'Engineer'){
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="cardcard mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (position === 'Intern'){
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log('new team member added');
        fs.appendFile("./dist/log.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
    });
});
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/log.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

init();

// promptUser();

// function writeToFile(filename, data) {
//     return fs.writeFileSync(path.join(process.cwd(), filename), data)
// }

//  {
//     inquirer.prompt(questions).then((responses)=>{
//         writeToFile('index.html', generateHTML({...responses}))
//     })
// }

//init();