//it extends from employee so we have to require it
const Employees = require('./employees');

class Engineer extends Employees {
    constructor(name, id, email, position, github){
        super(name, id, email, position);

        this.position = position

        this.github = github;
    }
    getGithub(){
        return {
            github = this.github,
        };
    }
    getPosition(){
        return {
            position: this.position,
        };
    }
}

module.exports = Engineer;