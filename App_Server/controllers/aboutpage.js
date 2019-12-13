const about = function(req, res) {
    res.render('about.pug', { title: 'About my site'});
    
};

module.exports = {
     about,
  
    };