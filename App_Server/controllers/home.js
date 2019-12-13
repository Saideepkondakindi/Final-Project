const index = function(req, res) {
    res.render('index.pug', { title: 'This is Home Page'});
    
};

module.exports = {
     index
    };