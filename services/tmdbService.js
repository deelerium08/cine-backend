const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: process.env.TMDB_API_KEY, language: 'es-ES' },
});

exports.getNowPlaying = () => api.get('/movie/now_playing');
exports.getPopular = () => api.get('/movie/popular');
exports.getCredits = (id) => api.get(`/movie/${id}/credits`);
