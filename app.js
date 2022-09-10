

const inquirer = require('inquirer');


const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


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
                if (isNaN (idValue)){
                    console.log('invalid entry, please enter 4 digit Manager ID');
                    return false;
                }else{
                    return true;
                }
            },
        },
        {
            type:'input',
            name:'office number',
            message: 'Please enter Manager office number',
            validate: (officeValue)=> {
                if (isNaN(officeValue)){
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
        const {name, id, email, officeNumber, addEmployee} = managerEntries;
        const manager = new Manager(name,email,id, officeNumber);
        Team.push(manager);

        if(addEmployee){
            return newEmp (Team);
        }else{
            return Team;
        }
    })
}