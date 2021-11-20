const Following = require('../models/followingSchema');

exports.following_create = async (req, res) => {
    const { body } = req;

    let newFollowing = new Following(body);
    await newFollowing.save().catch((err) => console.log('error', err));

    res.send(newFollowing);
};

exports.following_getall = async (req, res) => {
    const data = await Following.find().populate("user");
    res.send(data);
};

exports.following_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Following.findById(id).populate("user");
    res.send(data);
};

exports.following_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Following.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.following_delete = async (req, res) => {
    const { id } = req.params;
    await Following.deleteOne({ _id: id });

    res.send({ message: 'Following deleted' });
};