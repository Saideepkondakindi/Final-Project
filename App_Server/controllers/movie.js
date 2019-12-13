const request = require("request");
const apiOptions = {
    server: "http://localhost:3000"
};



const _renderHomepage = (req,res, responseBody)=>{
    res.render("list_display",{
        movies : responseBody
    });
};

const homelist = (req,res) =>{
    const path = "/api/movies";

    const requestOptions = {
        url : apiOptions.server+path,
        method: "GET",
        json: {}
    };
    request(
        requestOptions,(err,response,body)=>{
            _renderHomepage(req,res,body);
        }
    );
};


// for detail page
const _renderDetailPage = (req,res,responseBody)=>{
    res.render('display',{
        movie : responseBody
    });
};



const movieDetail = (req,res) =>{
    const path = `/api/movies/${req.params.movieid}`;

    const requestOptions = {
        url : apiOptions.server + path,
        method : "Get",
        json:{}
    };
    request (
        requestOptions,(err,response,body)=>{
            _renderDetailPage(req,res,body)
        }
    );
};


const _renderCreatePage = (req,res) =>{
    res.render('add-movie',{
        title: "New Movie"
    });
};


const movieForm = (req,res) =>{
    _renderCreatePage(req,res);
};


const createMovie = (req,res) =>{
    const path = "/api/movies";
    const postData = {
        movieName : req.body.movieName,
        producer : req.body.producer,
        actor: req.body.actor,
        actress : req.body.actress,
        budget : req.body.budget,
        type : req.body.type

    };

    const  requestOptions = {
        url : apiOptions.server + path,
        method: "POST",
        json: postData
    };
    request(
        requestOptions,(err,response,body)=>{
            if(response.statusCode === 201){
                res.redirect("/");
            }
        }
    )
}






module.exports = {homelist,movieDetail,movieForm,createMovie};
