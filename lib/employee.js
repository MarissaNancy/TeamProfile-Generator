//this is where employee constructor will go

//constructs employees and sets them equal to name, id, email, and poistion
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getPosition(){
        return "Employee";
    }
}
//make the return so we can grab the employee constructed and export it

module.exports = Employee