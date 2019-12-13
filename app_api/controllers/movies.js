const mongoose = require("mongoose");
const Movie = mongoose.model("movie");


const getMovieName = function (req, res){
    Movie.find().exec(function (err, moviesdata) {
        if (err) {
            res.status(404).json(err);
             return;
        } else {
            res.status(200).json(moviesdata);
        }
        ;
    });
};

const createMovie = function (req, res){
    Movie.create({
        movieName:req.body.movieName,
        producer: req.body.producer,
        actor: req.body.actor,
        actress:req.body.actress,
        budget:req.body.budget

    },(err,moviedata) =>{
        if(err){
            res.status(400).json(err);
        }else{
            res.status(201).json(moviedata);
        }
    });
};

const getSingleMovie = function (req, res){
  res
    Movie.findById(req.params.movieid).exec((err,moviedata)=>{
        if(!moviedata){
            return res.status(404).json({
                "message" : "movie not found"
            });
        }else if(err){
            return res.status(404).json(err);
        } else{
            return res.status(200).json(moviedata);
        }
    })
};

const updateMovie = function (req, res){
    if(!req.params.movieid){
        res.status(404).json({
            "message" : "error"
        })
        return;
    }


    Movie.findById(req.params.movieid).exec((err,moviedata)=>{
        if(!moviedata){
            res.status(404).json({
                "message" : "no data found"
            });
            return;
        } else if(err){
            res.status(404).json(err);
            return;
        }else{
            moviedata.movieName = req.body.movieName;
            moviedata.producer = req.body.producer;
            moviedata.actor= req.body.actor;
            moviedata.actress = req.body.actress;
            moviedata.budget = req.body.budget;
            moviedata.type = req.body.type;


            moviedata.save((err,moviedata)=>{
                if(err){
                    res.status(404).json(err);
                }else{
                    res.status(200).json(moviedata);
                }
            })

        }
    })
};

const deleteMovie = function (req, res){
    const movieid = req.params.movieid;
    if(movieid){
        Movie.findByIdAndRemove(movieid).exec((err,moviedata)=>{
            if(err){
                res.status(404).json(err);
                return;
            }
            res.status(204).json(null);

        });
    }else{
        res.status(204).json({
            "message" : "no movie found"
        })
    }
};

module.exports = {
    getMovieName,
    createMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
};