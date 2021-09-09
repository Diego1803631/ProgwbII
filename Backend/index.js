const express = require('express');
const app = express();
const port = 5001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./src/models/connection');
const User = require('./src/models/user');

app.get('/', (req, res) => {
    res.send('Success!!');
});

app.post('/user', (req, res) => {
    let newUser = new User({
        name: 'Diego',
        lastname: 'Flores',
        username: 'master1234',
        type: 1,
        email: 'diego@gmail.com',
        password: '1234',
        age: 21
    });
    newUser.save().then((newDBObject) => console.log('success', newDBObject))
    .catch((err) => console.log('error', err));
    res.send(newUser);
});

app.listen(port, () => {
    console.log('Listening to port http://localhost:' + port);
});
