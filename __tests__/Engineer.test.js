const Engineer = require('../lib/Engineer');

test ('creates engineer object', () =>{

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');

    expect (engineer.name).toBe('Billy');
    expect (engineer.email).toBe('Billy@Jean.com');
    expect (engineer.id).toBe('0002');
    expect (engineer.git).toBe('http://github.com/asaelens02');

});
test ('get engineer name',() => {

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');
//had trouble with this line, ref docs for toEqual and stringContaining helped 
    expect (engineer.getName()).toEqual(expect.stringContaining('Billy'));
});

test ('get engineer email',() =>{

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');
    expect (engineer.getEmail()).toEqual(expect.stringContaining('Billy@Jean.com'));
});

test ('get engineer ID',() =>{

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');

    expect (engineer.getID()).toEqual(expect.stringContaining('0002'));
});

test ('get engineer github', () =>{

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');

    expect (engineer.getGit()).toEqual(expect.stringContaining('http://github.com/asaelens02'));
});

test ('get engineer role',() => {

    const engineer = new Engineer('Billy', 'Billy@Jean.com','0002', 'http://github.com/asaelens02');

    expect (engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})

//passes all tests