const Followers = require('../models/followersSchema');

exports.followers_create = async (req, res) => {
    const { body } = req;

    let newFollowers = new Followers(body);
    await newFollowers.save().catch((err) => console.log('error', err));

    res.send(newFollowers);
};

exports.followers_getall = async (req, res) => {
    const data = await Followers.find().populate("user");
    res.send(data);
};

exports.followers_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Followers.findById(id).populate("user");
    res.send(data);
};

exports.followers_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Followers.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.followers_delete = async (req, res) => {
    const { id } = req.params;
    await Followers.deleteOne({ _id: id });

    res.send({ message: 'Followers deleted' });
};