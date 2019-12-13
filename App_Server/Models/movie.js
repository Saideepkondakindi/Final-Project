const mongoose = require('mongoose');


var movieDetailsSchema = new mongoose.Schema({
    moviereleased: {
        type: Number,
        required: true,
        min:5
    },
    movieartist: {
        type: String,
        required: true,
        min:5
    },
    moviecharacters: {
        type: Number,
        required: true
    }
});



var moviesSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        min:5
    },
    producer: {
        type: String,
        required: true,
        min:5
    },
    actor: {
        type: String,
        required: true,

    },
    actress: {
        type: String,
        required: true,

    },
     budget: {
        type: String,
        required: true,

    }

});

mongoose.model('movieDetails', movieDetailsSchema, 'movieDetails');
mongoose.model('movie', moviesSchema, 'movies');
