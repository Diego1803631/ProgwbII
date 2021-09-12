const express = require('express');
const bodyParser = require('body-parser');
require('./src/models/connection');

const user_router = require('./src/routes/userRouter');

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use('/api', user_router);

app.get('/', (req, res) => {
    res.send('Success!!');
});

app.listen(port, () => {
    console.log('Listening to port http://localhost:' + port);
});
