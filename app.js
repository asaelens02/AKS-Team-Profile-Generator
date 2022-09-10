

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

//manager questions

const addManager = () => {

    return inquirer
        .prompt ([{
            type: 'input',
            name:'name',
            message: 'Please enter Manager name',
            validate: (nameInput)=> {
                if (nameInput) {
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
            validate: (emailInput)=> {
                if (emailInput){
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
            validate: (idInput)=> {
                if (isNaN (idInput)){
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
            validate: (officeInput)=> {
                if (isNaN(officeInput)){
                    console.log ('invalid entry, please enter Manager office number');
                    return false;
                }else{
                    return true;
                }
            },

        },
    ])
}