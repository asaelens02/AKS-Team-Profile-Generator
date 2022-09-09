class Engineer {
    constructor(name,email,id,git) {
        
        this.name=name;
        this.email=email;
        this.id=id;
        this.git=git;
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

     getGit () {
        return this.git;
        
     }
    
     getRole () {
        return 'Engineer';
     }
    
}

module.exports=Engineer; 