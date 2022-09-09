const Intern = require('../lib/Intern');

test ('creates Intern object', () => {

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.name).toBe('Scooby');
    expect (intern.email).toBe('Scooby@Do.com');
    expect (intern.id).toBe('0003');
    expect (intern.school).toBe('Hogwarts');
});

test ('get intern name',() => {

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.getName()).toEqual(expect.stringContaining('Scooby'));
});

test ('get intern email',() =>{

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.getEmail()).toEqual(expect.stringContaining('Scooby@Do.com'));
});

test ('get intern ID',() =>{

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.getID()).toEqual(expect.stringContaining('0003'));
});

test ('get intern school', () => {

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.getSchool()).toEqual(expect.stringContaining ('Hogwarts'));
});

test ('get intern role',() => {

    const intern = new Intern('Scooby','Scooby@Do.com','0003','Hogwarts');

    expect (intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

//passes all tests