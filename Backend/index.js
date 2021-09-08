const express = require('express');
const app = express();
const port = 5001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Success!!');
});

app.listen(port, () => {
    console.log('Listening to port http://localhost:' + port);
});
