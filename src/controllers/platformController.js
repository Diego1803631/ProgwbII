const Platform = require('../models/platformSchema');

exports.platform_create = async (req, res) => {
    const { body } = req;

    if (req.body.name.length > 0 && req.body.link.length > 0) {
        let newPlatform = new Platform(body);
        await newPlatform.save().catch((err) => console.log('error', err));
        res.send(newPlatform);
    } else {
        res.send({ message: "Fill in all the fields" });
    }

};

exports.platform_getall = async (req, res) => {
    const data = await Platform.find();
    res.send(data);
};

exports.platform_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Platform.findById(id);
    res.send(data);
};

exports.platform_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Platform.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.platform_delete = async (req, res) => {
    const { id } = req.params;
    await Platform.deleteOne({ _id: id });

    res.send({ message: 'Category deleted' });
};