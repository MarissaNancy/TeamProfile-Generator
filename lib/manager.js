//extends from employee so we have to require

const Employees = require('./employees');

class Manager extends Employees{
    constructor(name, id, email, position, office){
        super(name, id, email, position);

        this.position = position
        // position = this.position ??
    
        this.office = office;
    }
    getOffice() {
        return{
            office: this.office,
        };
    }
}

module.exports = Manager