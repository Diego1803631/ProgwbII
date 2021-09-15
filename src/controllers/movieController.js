const Movie = require('../models/movieSchema');

exports.movie_create = async (req, res) => {
    const { body } = req;

    if (req.body.title.length > 0 && req.body.description.length > 0 && req.body.score != null && req.body.releasedate.length > 0) {
        let newMovie = new Movie(body);
        await newMovie.save().catch((err) => console.log('error', err));
        res.send(newMovie);
    } else {
        res.send({ message: "Fill in all the fields" });
    }
    
};

exports.movie_getall = async (req, res) => {
    const data = await Movie.find().populate("category");
    res.send(data);
};

exports.movie_getbyid = async (req, res) => {
    const { id } = req.params;
    const data = Movie.findById(id).populate("category");
    res.send(data);
};

exports.movie_update = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const data = await Movie.findOneAndUpdate({ _id: id }, body);
    res.send(data);
};

exports.movie_delete = async (req, res) => {
    const { id } = req.params;
    await Movie.deleteOne({ _id: id });

    res.send({ message: 'Movie deleted' });
};