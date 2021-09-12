const User = require('../models/userSchema');

exports.user_create = async (req, res) => {
    //validations
    const { body } = req;

    let newUser = new User(body);
    await newUser.save().then((newDBObject) => console.log('success', newDBObject)).catch((err) => console.log('error', err));

    res.send(newUser);
};

exports.user_getall = async (req, res) => {
    const data = await User.find();
    res.send(data);
};

exports.user_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = User.findById(id);
    res.send();
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