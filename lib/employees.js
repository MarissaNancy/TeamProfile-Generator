//this is where employee constructor will go

//constructs employees and sets them equal to name, id, email, and poistion
class Employees {
    constructor(name, id, email, position){
        this.name = name;
        this.id = id;
        this.email = email 
        this.postion = position;
    }
    getEmployees(){
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            // position: this.position
            //make sure it pos goes here or does it need its own method
        };
    }
}
//make the return so we can grab the employee constructed and export it

module.exports = Employees