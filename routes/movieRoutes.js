const express = require('express');
const router = express.Router();
const movies = require('../controllers/movieController');
const auth = require('../middlewares/authMiddleware');

router.get('/now-playing', auth, movies.nowPlaying);
router.get('/popular', auth, movies.popular);
router.get('/:id/credits', auth, movies.credits);

module.exports = router;
