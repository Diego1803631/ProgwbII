const Comment = require('../models/commentSchema');

exports.comment_create = async (req, res) => {
    const { body } = req;

    if (req.body.content.length > 0) {
        let newComment = new Comment(body);
        await newComment.save().catch((err) => console.log('error', err));
        res.send(newComment);
    } else {
        res.send({ message: "Fill in all the fields" });
    }

};

exports.comment_getall = async (req, res) => {
    const data = await Comment.find().populate("review");
    res.send(data);
};

exports.comment_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Comment.findById(id).populate("review");
    res.send(data);
};

exports.comment_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Comment.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.comment_delete = async (req, res) => {
    const { id } = req.params;
    await Comment.deleteOne({ _id: id });

    res.send({ message: 'Comment deleted' });
};

exports.comment_getbyLastID = async (req, res) => {
    const data = await Comment.find({}).sort({_id:-1}).limit(1);
    res.send(data);
};