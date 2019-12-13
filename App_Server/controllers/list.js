const list=function(req,res) {
    res.render('list_display', { title:"Movies List", movies: moviearray});
};

var moviearray= [{name:"fida", director:"sekhar"},{name:"pokiri", director:"trivikram"},{name:"bahubali", director:"rajamouli"}];

module.exports = {
    list
};