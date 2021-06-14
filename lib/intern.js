//extends thru employee so we have to require it 

const Employee = require('./employees');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getPosition(){
        return "Intern";
    }
}

module.exports = Intern;