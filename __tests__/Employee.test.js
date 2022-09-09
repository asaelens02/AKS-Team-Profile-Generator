const Employee = require('../lib/Employee');

test ('creates employee object',() =>{

    const employee = new Employee('Jane', 'Jane@Doe.com', '0001');

    expect (employee.name).toBe('Jane');
    expect (employee.email).toBe('Jane@Doe.com');
    expect (employee.id).toBe('0001');

});

test ('get employee name',() => {

    const employee = new Employee('Jane', 'Jane@Doe.com','0001');

    expect (employee.getName()).toEqual(expect.stringContaining('Jane'));
});

test ('get employee email',() =>{

    const employee = new Employee('Jane','Jane@Doe.com','0001');

    expect (employee.getEmail()).toEqual(expect.stringContaining('Jane@Doe.com'));
})