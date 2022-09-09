//started with Employee function, defined as a class later to minimize code for getName, getEmail, getID. 

class Employee {
    constructor (name,email,id) {

    this.name= name;
    this.email= email;
    this.id= id;
}
//Difficulty with unreachable code for "return this.name" tried several function variations 
//seemed to be solved with spacing correction? Took a long time to figure out. 
 getName() {
    return this.name;

 }

 getEmail () {
    return this.email;
 }

 getID () {
    return this.id;
 }

 getRole () {
    return 'Employee';
 }



}

module.exports = Employee;