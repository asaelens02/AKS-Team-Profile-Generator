const Employee = require('../lib/Employee');

test ('creates employee object',() =>{

    const employee = new Employee('Jane Doe', 'Jane@Doe.com', '0001');

    expect (employee.name).toBe('Jane Doe');
    expect (employee.email).toBe('Jane@Doe.com');
    expect (employee.id).toBe('0001');

})