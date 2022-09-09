const Engineer = require('../lib/Engineer');

test ('creates engineer object', () =>{

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');

    expect (engineer.name).toBe('Billy');
    expect (engineer.email).toBe('Billy@Jean.com');
    expect (engineer.id).toBe('0002');
    expect (engineer.git).toBe('http://github.com/asaelens02');

});
