const Manager = require('../lib/Manager');

test ('creates manager object',() =>{

    const manager = new Manager('Jim', 'Jim@Bob.com', '0000', 'A1');

    expect (manager.name).toBe('Jim');
    expect (manager.email).toBe('Jim@Bob.com');
    expect (manager.id).toBe('0000');
    expect (manager.office).toBe('A1');

});

test ('get manager name',() => {

    const manager = new Manager('Jim', 'Jim@Bob.com','0000','A1');

    expect (manager.getName()).toEqual(expect.stringContaining('Jim'));
});

test ('get manager email',() =>{

    const manager = new Manager('Jim','Jim@Bob.com','0000','A1');

    expect (manager.getEmail()).toEqual(expect.stringContaining('Jim@Bob.com'));
});

test ('get manager ID',() =>{

    const manager = new Manager ('Jim','Jim@Bob.com','0000','A1');

    expect (manager.getID()).toEqual(expect.stringContaining('0000'));
});

test ('get office number', () => {
    const manager =new Manager('Jim','Jim@Bob.com', '0000','A1');

    expect (manager.getOffice()).toEqual(expect.stringContaining('A1'));
})

test ('get manager role',() => {

    const manager = new Manager('Jim','Jim@Bob.com','0000','A1');

    expect (manager.getRole()).toEqual(expect.stringContaining('Manager'));
})