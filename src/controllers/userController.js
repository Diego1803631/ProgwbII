const User = require('../models/userSchema');

exports.user_create = async (req, res) => {
    const { body } = req;

    if (req.body.name.length > 0 && req.body.lastname.length > 0 && req.body.username.length > 0 && req.body.email.length > 0) {
        //email
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
            //password
            if (/[A-Z]/.test(req.body.password) && /[a-z]/.test(req.body.password) && /[0-9]/.test(req.body.password) && /[^A-Za-z0-9]/.test(req.body.password) && req.body.password.length > 4) {
                let newUser = new User(body);
                await newUser.save().then((newDBObject) => console.log('success', newDBObject)).catch((err) => console.log('error', err));
                res.send(newUser);
                console.log('User created');
            } else {
                res.send({ message: "Password must be longer than 4 characters and have a-z, A-Z, 0-9 and special characters" });
            }
        } else {
            res.send({ message: "Email must have @ and .com" });
        }
    }else{
        res.send({ message: "Fill in all the fields" });
    }

};

exports.user_getall = async (req, res) => {
    const data = await User.find();
    res.send(data);
};

exports.user_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = User.findById(id);
    res.send(data);
};

exports.user_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await User.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.user_delete = async (req, res) => {
    const { id } = req.params;
    await User.deleteOne({ _id: id });

    res.send({ message: 'User deleted' });
};