var express = require('express');
var router = express.Router();
var cors = require('cors');
var app = express();

app.use(cors())

const movieController = require('../controllers/movies');

router.route("/movies")
    .get(movieController.getMovieName)
    .post(movieController.createMovie);


router.route("/movies/:movieid")
    .get(movieController.getSingleMovie)
    .put(movieController.updateMovie)
    .delete(movieController.deleteMovie);


module.exports = router;

