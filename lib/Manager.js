class Manager {
    constructor(name,email,id,office){

    this.name=name;
    this.email=email;
    this.id=id;
    this.office=office;
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

     getOffice () {
        return this.office;
     }
    
     getRole () {
        return 'Manager';
     }
    
}

module.exports=Manager;