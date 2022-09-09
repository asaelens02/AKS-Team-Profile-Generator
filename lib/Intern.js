class Intern {

    constructor(name,email,id,school) {

        this.name=name;
        this.email=email;
        this.id=id;
        this.school=school;
    }

    getName() {
        return this.name;
    
     }
    
     getEmail () {
        return this.email;
     }
    
     getID () {
        return this.id;
     }

     getSchool() {
        return this.school;
     }
    
     getRole () {
        return 'Intern';
     }
    
    
    
    
}

module.exports=Intern;