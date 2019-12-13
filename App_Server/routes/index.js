var express = require('express');
var router = express.Router();
const ctrlabt=require('../controllers/aboutpage.js');
const ctrldisplay=require('../controllers/displaypage.js');
const ctrlhome=require('../controllers/home.js');
const ctrllist=require('../controllers/list.js');
const ctrlMovies = require("../controllers/movie");


/* GET home page. */

router.get('/about',ctrlabt.about);
router.get('/display',ctrldisplay.display);
router.get('/list',ctrllist.list);

router.get('/', ctrlMovies.homelist);
router.route("/add")
    .get(ctrlMovies.movieForm)
    .post(ctrlMovies.createMovie);
router.get("/detail/:movieid",ctrlMovies.movieDetail);

module.exports = router;





