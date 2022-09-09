

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

