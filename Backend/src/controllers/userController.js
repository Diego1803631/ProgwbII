const User = require('../models/userSchema');


exports.user_create = (req, res) => {
    let newUser = new User({
        name: 'Juan',
        lastname: 'Flores',
        username: 'master1234',
        type: 1,
        email: 'diego@gmail.com',
        password: '1234',
        age: 21
    });
    newUser.save().then((newDBObject) => console.log('success', newDBObject)).catch((err) => console.log('error', err));
    res.send(newUser);
};