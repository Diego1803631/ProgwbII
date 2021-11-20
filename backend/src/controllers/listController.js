const List = require('../models/listSchema');

exports.list_create = async (req, res) => {
    const { body } = req;

    if (req.body.title.length > 0 && req.body.description.length > 0) {
        let newList = new List(body);
        await newList.save().catch((err) => console.log('error', err));
        res.send(newList);
    }else{
        res.send({ message: "Fill in all the fields" });
    }

};

exports.list_getall = async (req, res) => {
    const data = await List.find().populate("user");
    res.send(data);
};

exports.list_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = await List.findById(id).populate("movie");
    res.send(data);
};

exports.list_update = async (req, res) => {
    const data = await List.findOneAndUpdate({ '_id': req.query.id }, {$push:{'movie': req.query.movie}});
    res.send(data);
};

exports.list_delete = async (req, res) => {
    const { id } = req.params;
    await List.deleteOne({ _id: id });

    res.send({ message: 'List deleted' });
};

exports.list_getbyUser = async (req, res) => {
    console.log(req.params);
    const data = await List.find({ "user": req.query.id }).populate("movie");
    res.send(data);
};

exports.list_remove = async (req, res) => {
    const data = await List.findOneAndUpdate({ '_id': req.query.id }, {$pull:{'movie': req.query.idMovie}});
    res.send(data);
};