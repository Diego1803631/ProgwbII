const Category = require('../models/categorySchema');

exports.category_create = async (req, res) => {
    const { body } = req;
    if (req.body.name.length > 0) {
        let newCategory = new Category(body);
        await newCategory.save().catch((err) => console.log('error', err));
        res.send(newCategory);
    } else {
        res.send({ message: "Fill in all the fields" });
    }
};

exports.category_getall = async (req, res) => {
    const data = await Category.find();
    res.send(data);
};

exports.category_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Category.findById(id);
    res.send(data);
};

exports.category_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Category.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.category_delete = async (req, res) => {
    const { id } = req.params;
    await Category.deleteOne({ _id: id });

    res.send({ message: 'Category deleted' });
};