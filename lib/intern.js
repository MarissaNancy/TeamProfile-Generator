//extends thru employee so we have to require it 

const Employees = require('./employees');

class Intern extends Employees {
    constructor(name, id, email, position, school) {
        super(name, id, position);

        this.position = position

        this.school = school;
    }

    getSchool() {
        return{
            school: this.school,
        };
    }
}

module.exports = Intern;