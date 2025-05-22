const tmdb = require('../services/tmdbService');

exports.nowPlaying = async (req, res) => {
    const { data } = await tmdb.getNowPlaying();
    res.json(data);
};

exports.popular = async (req, res) => {
    const { data } = await tmdb.getPopular();
    res.json(data);
};

exports.credits = async (req, res) => {
    const { data } = await tmdb.getCredits(req.params.id);
    res.json(data);
};
