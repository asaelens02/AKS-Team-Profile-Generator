
const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');

//const  writeFile = require('./utils/generate-site');


//Objects that have been tested
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer= require('./lib/Engineer');
const Manager = require('./lib/Manager');

//Team list (as an array)
const Team = [];

//capture manager information

const addManager = () => {

    return inquirer
        .prompt ([{
            type: 'input',
            name:'name',
            message: 'Please enter Manager name',
            validate: (nameEntry)=> {
                if (nameEntry) {
                    return true;
                }else{
                    console.log('invalid entry, please enter Manager name');
                    return false;
                }
            },

        },
        {
            type:'input',
            name:'email',
            message:'Please enter Manager email address',
            validate: (emailEntry)=> {
                if (emailEntry){
                    return true;
                }else{
                    console.log ('invalid entry, please enter Manager email address');
                    return false;
                }

            },

        },
        {
            type:'input',
            name:'id',
            message:'Please enter Manager ID',
            validate: (idValue)=> {

                //isNaN is boolean that indicates that a value is "not a number"
                if (isNaN(idValue)){
                    console.log('invalid entry, please enter 4 digit Manager ID');
                    return false;
                }else{
                    return true;
                }
            },
        },
        {
            type:'input',
            name:'office',
            message: 'Please enter Manager office number',
            validate: (officeNumber)=> {
                if (isNaN(officeNumber)){
                    console.log ('invalid entry, please enter Manager office number');
                    return false;
                }else{
                    return true;
                }
            },

        },
        {
            //confirm manager entry, inquire for more entries
            type: 'confirm',
            name:'addEmployee',
            message:'Would you like to add another person to the team?',
            default: false,
        },
    ])

    //use .then to use entered data to create manager in array and add new employees

    .then ((managerEntries)=> {
        const {name, id, email, office, addEmployee} = managerEntries;
        const manager = new Manager(name,email,id, office);
        Team.push(manager);

        if(addEmployee){
            return createEmployee (Team);
        }else{
            return Team;
        }
    });
};

    //create Employee entries

    const createEmployee =()=> {
        return inquirer
        .prompt ([
            {
                type:'list',
                name:'role',
                message: 'Please select title of new team member from list',
                choices: ['Intern', 'Engineer'],
            },
            {
                type: 'input',
                name: 'name', 
                message: 'Please enter team member name',
                validate: (nameEntry)=> {
                    if (nameEntry){
                        return true;
                    }else{
                        console.log('invalid entry, please enter team member name');
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name:'id',
                message: 'Please enter team member ID number',
                validate:(idValue)=> {
                    if (isNaN(idValue)){
                        console.log ('invalid entry, please enter 4 digit ID');
                        return false;
                    }else{
                        return true;
                    }
                },
            },

            //alternate questions for Engineer role and Intern role
            {
                type:'input',
                name: 'github',
                message: 'please enter team member github username',
                when: (data) => data.role === 'Engineer',
            
                validate: (githubInput) =>{
                    if (githubInput){
                        return true;
                    }else{
                        console.log ('invalid entry, please enter github username');
                        return false;
                    }
                },    
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter team member school',
                when: (data) => data.role === 'Intern',

                validate: (schoolEntry) => {
                    if (schoolEntry) {
                        return true;
                    }else{
                        console.log ('invalid entry, please enter school name');
                    }
                },
            },
            {
                //confirm employee entry, inquire for more entries
                type: 'confirm',
                name:'addEmployee',
                message:'Would you like to add another person to the team?',
                default: false,
            },
        ])

        .then((employeeData) => {
            let { name, id, email, role, github, school, addEmployee } =
              employeeData;
            let employee = {};
            if (role === "Engineer") {
              employee = new Engineer(name, id, email, github);
            
            } else if (role === "Intern") {
              employee = new Intern(name, id, email,school);
              
            }
            Team.push(employee);
      //loops back through employee questions until all members added
            if (addEmployee) {
              return createEmployee(Team);
            } else {

                console.log(Team);
              return Team;
            }
    })

}

const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(
          'Team profile created'
        );
      }
    });
  };
    //calls initial function to begin questions in node 
    addManager()                
    .then((Team) => {
        return generatePage(Team);
      })
      .then((fileHTML) => {
        return writeFile(fileHTML);
      })
      .catch((err) => {
        console.log(err);
      });    
      
      
                 
 