const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dbListFactory?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    { useNewUrlParser: true })
    .then(() => console.log('success'))
    .catch(() => {
        console.log('error')
        process.exit()
    });