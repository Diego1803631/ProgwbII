const Movie = require('../models/movieSchema');

exports.movie_create = async (req, res) => {
    const { body } = req;
    console.log("createbody", body);

    if (req.body.title.length > 0 && req.body.description.length > 0 && req.body.releasedate.length > 0 && req.body.episodes > 0) {
        let newMovie = new Movie(body);
        await newMovie.save().catch((err) => console.log('error', err));
        res.send(newMovie);
    } else {
        res.send({ message: "Fill in all the fields" });
    }

};

exports.movie_getall = async (req, res) => {
    const data = await Movie.find().populate("category").populate("platform");
    res.send(data);
};

exports.movie_orderbyScore = async (req, res) => {
    const data = await Movie.find().populate("category").populate("platform").sort({ score: -1 });
    res.send(data);
};

exports.movie_orderbyName = async (req, res) => {
    const data = await Movie.find().populate("category").populate("platform").sort({ title: 1 });
    res.send(data);
};

exports.movie_orderbyDate = async (req, res) => {
    const data = await Movie.find().populate("category").populate("platform").sort({ releasedate: 1 });
    res.send(data);
};

exports.movie_getbyTitle = async (req, res) => {
    console.log(req.params);
    const data = await Movie.find({ "title": { $regex: req.query.title } }).populate("category").populate("platform");
    res.send(data);
};

exports.movie_getbySpecificTitle = async (req, res) => {
    console.log(req.params);
    const data = await Movie.find({ "title": req.query.title }).populate("category").populate("platform");
    res.send(data);
};

exports.movie_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Movie.findById(id).populate("category").populate("platform");
    res.send(data);
};

exports.movie_update = async (req, res) => {
    console.log(req.query.score);
    const data = await Movie.findOneAndUpdate({ '_id': req.query.id }, {$set:{'score': req.query.score}});
    res.send(data);
};

exports.movie_delete = async (req, res) => {
    const { id } = req.params;
    await Movie.deleteOne({ _id: id });

    res.send({ message: 'Movie deleted' });
};

exports.movie_getbyCategory = async (req, res) => {
    const data = await Movie.find({ "category": req.query.category }).populate("category").populate("platform");
    res.send(data);
};