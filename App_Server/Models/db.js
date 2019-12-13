const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://saideep1:saideep@cluster0-juy4h.mongodb.net/movie?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'movie'});
mongoose.connection.on('connected', () => { 
console.log("Mongoose connected to" +dbURI);
}); 
mongoose.connection.on('error', err => { 
console.log('Mongoose connection error:', err); 
}); 

require('./movie');
