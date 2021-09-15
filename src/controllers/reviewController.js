const Review = require('../models/reviewSchema');

exports.review_create = async (req, res) => {
    const { body } = req;

    if (req.body.title.length > 0 && req.body.content.length > 0 && req.body.score != null) {
        let newReview = new Review(body);
        await newReview.save().catch((err) => console.log('error', err));
        res.send(newReview);
    }else {
        res.send({ message: "Fill in all the fields" });
    }

};

exports.review_getall = async (req, res) => {
    const data = await Review.find().populate("movie");
    res.send(data);
};

exports.review_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Review.findById(id).populate("movie");
    res.send(data);
};

exports.review_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Review.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.review_delete = async (req, res) => {
    const { id } = req.params;
    await Review.deleteOne({ _id: id });

    res.send({ message: 'Review deleted' });
};