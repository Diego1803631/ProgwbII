const Userlikes = require('../models/userlikesSchema');

exports.userlikes_create = async (req, res) => {
    const { body } = req;

    let newUserlikes = new Userlikes(body);
    await newUserlikes.save().catch((err) => console.log('error', err));

    res.send(newUserlikes);
};

exports.userlikes_getall = async (req, res) => {
    const data = await Userlikes.find().populate("movie");
    res.send(data);
};

exports.userlikes_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Userlikes.findById(id).populate("movie");
    res.send(data);
};

exports.userlikes_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Userlikes.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.userlikes_delete = async (req, res) => {
    const { id } = req.params;
    await Userlikes.deleteOne({ _id: id });

    res.send({ message: 'Userlikes deleted' });
};