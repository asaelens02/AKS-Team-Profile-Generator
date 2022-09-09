const Employee = require('../lib/Employee');

test ('creates employee object',() =>{

    const employee = new Employee('Jane', 'Jane@Doe.com', '0001');

    expect (employee.name).toBe('Jane');
    expect (employee.email).toBe('Jane@Doe.com');
    expect (employee.id).toBe('0001');

});

test ('get employee name',() => {

    const employee = new Employee('Jane', 'Jane@Doe.com','0001');
//had trouble with this line, ref docs for toEqual and stringContaining helped 
    expect (employee.getName()).toEqual(expect.stringContaining('Jane'));
});

test ('get employee email',() =>{

    const employee = new Employee('Jane','Jane@Doe.com','0001');

    expect (employee.getEmail()).toEqual(expect.stringContaining('Jane@Doe.com'));
});

test ('get employee ID',() =>{

    const employee = new Employee ('Jane', 'Jane@Doe.com','0001');

    expect (employee.getID()).toEqual(expect.stringContaining('0001'));
});

test ('get employee role',() => {

    const employee = new Employee ('Jane', 'Jane@Doe.com', '0001');

    expect (employee.getRole()).toEqual(expect.stringContaining('Employee'));
})

//passes all tests