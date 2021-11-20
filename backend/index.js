const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
require('./src/models/connection');

const user_router = require('./src/routes/userRouter');
const movie_router = require('./src/routes/movieRouter');
const category_router = require('./src/routes/categoryRouter');
const review_router = require('./src/routes/reviewRouter');
const list_router = require('./src/routes/listRouter');
const userlikes_router = require('./src/routes/userlikesRouter');
const followers_router = require('./src/routes/followersRouter');
const following_router = require('./src/routes/followingRouter');
const comment_router = require('./src/routes/commentRouter');
const platform_router = require('./src/routes/platformRouter');

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());
app.use('/api', user_router);
app.use('/api', movie_router);
app.use('/api', category_router);
app.use('/api', review_router);
app.use('/api', list_router);
app.use('/api', userlikes_router);
app.use('/api', followers_router);
app.use('/api', following_router);
app.use('/api', comment_router);
app.use('/api', platform_router);

app.get('/', (req, res) => {
    res.send('Success!!');
});

app.listen(port, () => {
    console.log('Listening to port http://localhost:' + port);
});
